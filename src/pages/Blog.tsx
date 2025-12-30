import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { usePosts } from '@/hooks/useWordPress';
import { getFeaturedImageUrl, formatDate, stripHtml } from '@/lib/wordpress';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = usePosts(currentPage, POSTS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    if (data && currentPage < data.totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
            Blog
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Insights, stories, and inspiration from Akinola Olujobi
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load blog posts. Please try again later.</p>
            </div>
          )}

          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="blog-card">
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-28" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {data && data.posts.length > 0 && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.posts.map((post, index) => {
                  const featuredImage = getFeaturedImageUrl(post, 'medium_large');
                  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 150);

                  return (
                    <article 
                      key={post.id} 
                      className="blog-card animate-fadeInUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {featuredImage && (
                        <Link to={`/blog/${post.slug}`}>
                          <img
                            src={featuredImage}
                            alt={stripHtml(post.title.rendered)}
                            className="w-full aspect-video object-cover"
                          />
                        </Link>
                      )}
                      {!featuredImage && (
                        <div className="w-full aspect-video bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-heading text-2xl">AO</span>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <h2 
                            className="text-xl font-heading font-semibold text-foreground hover:text-primary transition-colors mb-3"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </Link>
                        <p className="text-muted-foreground text-sm mb-4">
                          {excerpt}...
                        </p>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {data.totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <span className="text-muted-foreground">
                    Page {currentPage} of {data.totalPages}
                  </span>
                  <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={currentPage === data.totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}

          {data && data.posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
