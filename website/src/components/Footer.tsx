import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'FAQs', href: '#faqs', isPage: false },
  ];

  const services = [
    { name: 'Influencer Marketing', href: '/services/influencer-marketing' },
    { name: 'Search Engine Optimization', href: '/services/seo' },
    { name: 'Social Media Marketing', href: '/services/social-media' },
    { name: 'Pay Per Click (PPC)', href: '/services/ppc' },
    { name: 'View All Services', href: '/services' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            {/* Logo Image */}
            <div className="flex items-center space-x-3">
              <img 
                src="/img/QM2.png" 
                alt="Company Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              We help brands scale online through performance marketing, SEO, social media, 
              and modern web development - all under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-white/60">
            © 2026 QuickMarketing. All rights reserved. Licensed in UAE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
