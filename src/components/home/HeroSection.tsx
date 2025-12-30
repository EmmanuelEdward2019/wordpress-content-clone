import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-speaker.jpg';

export function HeroSection() {
  return (
    <section className="hero-section relative min-h-[500px] lg:min-h-[600px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="py-16 lg:py-24 animate-slideInLeft">
            <blockquote className="hero-quote text-primary-foreground mb-6">
              Beyond words, there are worlds. let me weave yours with stories that captivate and convert
            </blockquote>
            <p className="text-primary-foreground/80 text-lg italic">
              Akinola Olujobi
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/20" />
            <img
              src={heroImage}
              alt="Akinola Olujobi speaking to an audience"
              className="w-full h-full object-cover object-center min-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
