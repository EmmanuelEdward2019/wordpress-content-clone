import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    title: 'Website Design',
    category: 'Web Development',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/35f8aa15-project-4-1.jpg',
    description: 'Creating modern, responsive websites that captivate and convert.',
  },
  {
    title: 'Awareness Campaign',
    category: 'Digital Marketing',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/Fbook-Ads-e1715598608694.jpeg',
    description: 'Strategic campaigns that increase brand visibility and engagement.',
  },
  {
    title: 'Spoken Word',
    category: 'Performance',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/35f1a0e8-4449-4892-ab81-edcd8e470119.jpeg',
    description: 'Powerful poetry performances that move and inspire audiences.',
  },
  {
    title: 'Content Creation',
    category: 'Writing',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/fa5eae62-project-1-1.png',
    description: 'Compelling content that tells your story and engages your audience.',
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We craft tomorrow's possibilities today. Explore the journey, envision the future.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.title}
                className="portfolio-card group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="portfolio-overlay p-6">
                  <span className="text-primary-foreground/80 text-sm mb-2">{item.category}</span>
                  <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">{item.description}</p>
                  <Button variant="secondary" size="sm">
                    View Project
                  </Button>
                </div>
                <div className="p-6 bg-card">
                  <span className="text-muted-foreground text-sm">{item.category}</span>
                  <h3 className="text-xl font-heading font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Want to Work Together?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing. Whether it's a website, marketing campaign, or content strategy, I'm here to help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
