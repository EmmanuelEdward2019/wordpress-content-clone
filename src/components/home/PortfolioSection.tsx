import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    title: 'Website Design',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/35f8aa15-project-4-1.jpg',
    href: '/portfolio',
  },
  {
    title: 'Awareness Campaign',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/Fbook-Ads-e1715598608694.jpeg',
    href: '/portfolio',
    showStats: true,
  },
  {
    title: 'Spoken Word',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/35f1a0e8-4449-4892-ab81-edcd8e470119.jpeg',
    href: '/portfolio',
  },
  {
    title: 'Content Creation',
    image: 'https://www.akinolaolujobi.com/wp-content/uploads/2024/05/fa5eae62-project-1-1.png',
    href: '/portfolio',
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="section-title text-foreground">My Portfolio</h2>
          <p className="section-subtitle">
            We craft tomorrow's possibilities today. Explore the journey, envision the future.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Large Left Item */}
          <div className="portfolio-card aspect-[4/3] animate-fadeInUp">
            <img
              src={portfolioItems[0].image}
              alt={portfolioItems[0].title}
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-4">
                {portfolioItems[0].title}
              </h3>
              <Link to={portfolioItems[0].href}>
                <Button variant="secondary" size="sm">
                  View Project
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column with Stats and Item */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-card border border-border rounded-lg p-6 animate-fadeInUp animation-delay-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  First Brand Awareness
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Performance metrics</span>
                <div className="flex gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Awareness</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Clicks</span>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Reach</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-foreground">62,131</p>
                  <p className="text-sm text-muted-foreground">Total Reach</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">NGN58.84</p>
                  <p className="text-sm text-muted-foreground">Cost per Result</p>
                </div>
              </div>
            </div>

            {/* Small Portfolio Item */}
            <div className="portfolio-card aspect-video animate-fadeInUp animation-delay-200">
              <img
                src={portfolioItems[1].image}
                alt={portfolioItems[1].title}
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-4">
                  {portfolioItems[1].title}
                </h3>
                <Link to={portfolioItems[1].href}>
                  <Button variant="secondary" size="sm">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="portfolio-card aspect-video animate-fadeInUp animation-delay-300">
            <img
              src={portfolioItems[2].image}
              alt={portfolioItems[2].title}
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-4">
                {portfolioItems[2].title}
              </h3>
              <Link to={portfolioItems[2].href}>
                <Button variant="secondary" size="sm">
                  View Project
                </Button>
              </Link>
            </div>
          </div>

          <div className="portfolio-card aspect-video animate-fadeInUp animation-delay-400">
            <img
              src={portfolioItems[3].image}
              alt={portfolioItems[3].title}
              className="w-full h-full object-cover"
            />
            <div className="portfolio-overlay">
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-4">
                {portfolioItems[3].title}
              </h3>
              <Link to={portfolioItems[3].href}>
                <Button variant="secondary" size="sm">
                  View Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
