import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Dashboard', href: '/dashboard' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user} = useAuth();
  console.log(user)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                SwiftBounty
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="flex items-center space-x-8 mr-4">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.href} 
                    to={link.href} 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 border-gray-100">
                <Button variant="outline" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 space-y-8 pb-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors text-2xl font-medium"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-full max-w-xs flex flex-col space-y-4 pt-4">
            <Button 
              variant="outline" 
              className="w-full text-lg h-12" 
              asChild 
              onClick={closeMobileMenu}
            >
              <Link to="/login">Log In</Link>
            </Button>

            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full text-lg h-12" 
              asChild 
              onClick={closeMobileMenu}
            >
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}