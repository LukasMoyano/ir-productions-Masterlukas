import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  language: 'es' | 'en';
  toggleLanguage: () => void;
}

const Header = ({ language, toggleLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = {
    es: [
      { href: '#inicio', label: 'Inicio' },
      { href: '#servicios', label: 'Servicios' },
      { href: '#proceso', label: 'Proceso' },
      { href: '#equipo', label: 'Equipo' },
      { href: '#contacto', label: 'Contacto' }
    ],
    en: [
      { href: '#home', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'Process' },
      { href: '#team', label: 'Team' },
      { href: '#contact', label: 'Contact' }
    ]
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (location.pathname === '/') {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      // Add a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IR</span>
            </div>
            <span className="font-bold text-lg gradient-text-primary">
              {language === 'es' ? 'Productions' : 'Productions'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems[language].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Language Toggle & Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems[language].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors px-2 py-1 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-1 justify-start px-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'es' ? 'English' : 'Español'}</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;