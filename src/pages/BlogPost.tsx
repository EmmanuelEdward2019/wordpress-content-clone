import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { usePost } from '@/hooks/useWordPress';
import { getFeaturedImageUrl, formatDate, stripHtml } from '@/lib/wordpress';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = usePost(slug || '');

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/4 mb-8" />
          <Skeleton className="aspect-video w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const featuredImage = getFeaturedImageUrl(post, 'large');

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Akinola Olujobi
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {featuredImage && (
              <img
                src={featuredImage}
                alt={stripHtml(post.title.rendered)}
                className="w-full rounded-lg shadow-lg mb-8"
              />
            )}
            <div 
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
