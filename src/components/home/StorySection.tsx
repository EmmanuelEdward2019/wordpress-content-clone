import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function StorySection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="animate-slideInLeft">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              My Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">Here is my world</p>
              <p className="italic">In my world I weave worlds with words</p>
              <p className="italic">Crafting words that stir and inspire</p>
              <p className="italic">Words in different spheres and tandem –</p>
              <p className="italic">Poetic verses and spoken rhymes</p>
              <p className="italic">I weave tales of wonder and desire</p>
              <p className="italic">From blog post to articles,</p>
              <p className="italic">content and copywriting to even email marketing.</p>
              <p className="italic">With social media posts that captivate,</p>
              <p className="italic">this in my world abides in leap and bound.</p>
              <p className="italic">I am a weaver of minds, threading knowledge,</p>
              <p className="italic">Infusing eager hearts with wisdom's light.</p>
              <p className="italic">I rekindle motivation, igniting passion that burn ever bright…</p>
            </div>
            <Link to="/about-us" className="inline-block mt-8">
              <Button variant="default" size="lg">
                Read Akinola's Story
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="animate-slideInRight">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg transform rotate-3" />
              <img
                src="https://www.akinolaolujobi.com/wp-content/uploads/2024/05/akinola-olawale-olujobi.-2024050815454-1-1-e1715178040358.png"
                alt="Akinola Olujobi"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
