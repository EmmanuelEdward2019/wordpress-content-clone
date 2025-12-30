import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { usePage } from '@/hooks/useWordPress';
import { getFeaturedImageUrl, stripHtml } from '@/lib/wordpress';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft } from 'lucide-react';

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: page, isLoading, error } = usePage(slug || '');

  if (isLoading) {
    return (
      <Layout>
        <div className="hero-section py-20">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-12 w-1/2 mx-auto mb-4 bg-primary-foreground/20" />
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !page) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const featuredImage = getFeaturedImageUrl(page, 'large');

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {featuredImage && (
              <img
                src={featuredImage}
                alt={stripHtml(page.title.rendered)}
                className="w-full rounded-lg shadow-lg mb-8"
              />
            )}
            <div 
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default DynamicPage;
