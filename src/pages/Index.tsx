import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CTASection } from '@/components/home/CTASection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { StorySection } from '@/components/home/StorySection';
import { QuoteBanner } from '@/components/home/QuoteBanner';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <PortfolioSection />
      <StorySection />
      <QuoteBanner />
    </Layout>
  );
};

export default Index;
