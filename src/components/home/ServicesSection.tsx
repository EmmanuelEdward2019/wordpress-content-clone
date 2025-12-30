import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'I Teach.',
    description: 'Knowledge is a gift, and I believe in sharing it freely. As a teacher, I guide others on their journeys of self-discovery and skill development. I create a nurturing environment where students feel comfortable exploring their potential.',
    href: '/i-teach',
    variant: 'primary' as const,
  },
  {
    title: 'I Inspire.',
    description: "Inspiration, by its very nature, is contagious. When we are inspired, we naturally want to share that feeling with others. It's my hope that the spark I ignite in individuals through my work will create a ripple effect of positivity and goals achievement.",
    href: '/i-inspire',
    variant: 'light' as const,
  },
  {
    title: 'I Write.',
    description: 'Words are my currency, stories my craft. With each turn of phrase, I paint vivid pictures and evoke emotions that linger long after the final line. My written works inspire, educate, and entertain, leaving a lasting impact on those who encounter them.',
    href: '/i-write',
    variant: 'primary' as const,
  },
  {
    title: 'I Speak.',
    description: 'The power of spoken word is undeniable. I take the stage and weave spoken word poetry that resonates with raw emotion and deep within the soul. My voice becomes a conduit for powerful messages, igniting passion, challenging perspectives, and inspiring action.',
    href: '/i-speak',
    variant: 'light' as const,
  },
  {
    title: 'I Digital.',
    description: 'As a digital marketer, I strategize and craft captivating campaigns that not only grab attention but also resonate with target audiences. Data analysis informs my approach, while my inherent creativity ensures that each campaign is unique and impactful.',
    href: '/i-digital',
    variant: 'primary' as const,
  },
  {
    title: 'I Sing.',
    description: "Music has the power to move mountains, and I use my voice to create songs that uplift and inspire. Whether it's soulful melodies or heart-pounding rhythms, my music resonates with a universal message of hope, perseverance, and the pursuit of dreams.",
    href: '/i-sing',
    variant: 'light' as const,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="section-title text-foreground">What I Do</h2>
          <p className="section-subtitle">
            I inspire and motivate with words. I craft compelling stories across mediums, from captivating blog posts to fiery social media content. Your vision becomes my canvas, and with each word, I paint a picture that ignites emotions and sparks action.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.variant === 'primary' ? 'service-card' : 'service-card-light'} animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-2xl font-heading font-semibold italic mb-4 ${
                service.variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {service.title}
              </h3>
              <p className={`mb-6 leading-relaxed text-sm ${
                service.variant === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground'
              }`}>
                {service.description}
              </p>
              <Link to={service.href}>
                <Button 
                  variant={service.variant === 'primary' ? 'secondary' : 'default'}
                  size="sm"
                >
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
