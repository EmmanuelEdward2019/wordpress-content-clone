import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/our-services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const helpLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Need Advice?', href: '/contact' },
  { name: 'Support Policy', href: '/support-policy' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Freelance Banner */}
      <div className="overflow-hidden bg-primary py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="mx-8 text-sm font-medium text-primary-foreground">I AM AVAILABLE FOR FREELANCE WORK</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">•</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">I AM AVAILABLE FOR FREELANCE WORK</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">•</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">I AM AVAILABLE FOR FREELANCE WORK</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">•</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">I AM AVAILABLE FOR FREELANCE WORK</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">•</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">I AM AVAILABLE FOR FREELANCE WORK</span>
          <span className="mx-8 text-sm font-medium text-primary-foreground">•</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg className="h-10 w-10 text-background" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L35 15V35L20 25L5 35V15L20 5Z" fill="currentColor" opacity="0.8"/>
                <path d="M20 5L35 15L20 25L5 15L20 5Z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-heading font-bold">AKINOLA OLUJOBI</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              This is a hub for all things inspiration, motivation, growth, digital marketing, spoken word and more.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Help Center</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-background/70 text-sm">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a 
                  href="mailto:connect@akinolaolujobi.com" 
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  connect@akinolaolujobi.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a 
                  href="tel:+2349068133874" 
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +234-906-8133-874
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            Copyright © {new Date().getFullYear()} AKINOLA OLUJOBI
          </p>
          <p className="text-background/50 text-sm">
            Powered by AKINOLA OLUJOBI
          </p>
        </div>
      </div>
    </footer>
  );
}
