import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  language: 'es' | 'en';
  toggleLanguage: () => void;
}

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const Header = ({ language, toggleLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: Record<'es' | 'en', NavItem[]> = {
    es: [
      { href: '/', label: 'Inicio' },
      {
        href: '#servicios',
        label: 'Servicios',
        children: [
          { href: '/servicios/hpc-builder', label: 'Workstations HPC/IA' },
          { href: '/servicios/blockchain', label: 'Blockchain Soberano' },
          { href: '/talleres-agro-innovacion', label: 'Talleres Agro-Innovación' },
        ],
      },
      { href: '/portfolio', label: 'Portafolio' },
      { href: '/experiencias-btl-atl', label: 'Experiencias' },
      { href: '/blog-news', label: 'Blog & NEWS' },
      { href: '#contacto', label: 'Contacto' },
    ],
    en: [
      { href: '/', label: 'Home' },
      {
        href: '#services',
        label: 'Services',
        children: [
          { href: '/servicios/hpc-builder', label: 'HPC/AI Workstations' },
          { href: '/servicios/blockchain', label: 'Sovereign Blockchain' },
          { href: '/talleres-agro-innovacion', label: 'Agro-Innovation Workshops' },
        ],
      },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/experiencias-btl-atl', label: 'Experiences' },
      { href: '/blog-news', label: 'Blog & NEWS' },
      { href: '#contact', label: 'Contact' },
    ],
  };

  const isActive = (href: string) => {
    if (href.startsWith('/') && href !== '/') {
      return location.pathname === href || location.pathname.startsWith(href + '/');
    }
    return location.pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMenuOpen(false);
      setIsServicesOpen(false);
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (location.pathname === '/') {
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  const skipLabel = language === 'es' ? 'Saltar al contenido' : 'Skip to content';
  const investorsLabel = language === 'es' ? 'Inversionistas' : 'Investors';

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        {skipLabel}
      </a>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IR</span>
            </div>
            <span className="font-bold text-lg gradient-text-primary">Productions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navItems[language].map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer text-sm xl:text-base flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-2 transition-all duration-200 z-50 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`relative cursor-pointer text-sm xl:text-base transition-colors duration-300 group ${isActive(item.href) ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              )
            )}
          </nav>

          {/* Language Toggle, Investors CTA & Menu */}
          <div className="flex items-center space-x-2 xl:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden lg:flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </Button>

            <Button
              size="sm"
              className="hidden lg:inline-flex cta-primary"
              onClick={() => navigate('/inversionistas')}
            >
              {investorsLabel}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems[language].map((item) =>
                item.children ? (
                  <div key={item.href} className="py-1">
                    <p className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-1.5 text-foreground hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className="text-foreground hover:text-primary transition-colors px-2 py-1.5 cursor-pointer"
                  >
                    {item.label}
                  </a>
                )
              )}
              <Button
                size="sm"
                className="mt-2 cta-primary"
                onClick={() => { setIsMenuOpen(false); navigate('/inversionistas'); }}
              >
                {investorsLabel}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                className="flex items-center space-x-1 justify-start px-2 mt-1"
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
