import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.jpg';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about', hash: '#about' },
    { name: 'Projects', href: '/projects', hash: '#projects' },
    { name: 'Services', href: '/services', hash: '#services' },
    { name: 'Testimonials', href: '/testimonials', hash: '#testimonials' },
    { name: 'Contact', href: '/contact', hash: '#contact' },
  ];

  const handleNavClick = (link: { href: string; hash: string }) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Alpha Core Solution Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className="relative font-heading text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative font-heading text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === link.href 
                      ? 'text-primary after:w-full' 
                      : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <ThemeToggle />
            <Link to="/contact" className="btn-primary">
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className="font-heading text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-heading text-lg font-medium transition-colors ${
                    location.pathname === link.href 
                      ? 'text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center mt-4"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
