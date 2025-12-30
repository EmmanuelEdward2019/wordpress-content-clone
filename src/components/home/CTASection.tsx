import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA */}
          <div className="bg-primary text-primary-foreground p-10 rounded-lg animate-slideInLeft">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Let's chat content!
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Schedule a call and see how I can take your goals and brand to the next level.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Call Me
              </Button>
            </Link>
          </div>

          {/* Right Column - e-Books */}
          <div className="flex gap-8 items-stretch animate-slideInRight">
            <div className="flex-1">
              <img
                src="https://www.akinolaolujobi.com/wp-content/uploads/2024/07/ai-generated-books-bookshelves-7847758-627x1024.jpg"
                alt="Books and bookshelves"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                My e-Books & Courses
              </h3>
              <p className="text-muted-foreground mb-6">
                Unleash your potential. Dive into a world of inspiration and motivation with our ebooks and courses. Discover the power within you and chase your dreams.
              </p>
              <Link to="/e-books">
                <Button variant="default">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
