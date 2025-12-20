
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'FAQ', path: '/faq' },
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact', path: '/contact' },
      { name: 'Status', path: '/status' },
    ],
  };


  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">SwiftBounty</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Building amazing products for the modern web.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} YourCompany. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;