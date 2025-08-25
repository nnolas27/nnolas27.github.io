import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'About', icon: <Code className="h-4 w-4" /> },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="font-mono text-xl font-bold cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-primary group-hover:text-glow transition-all duration-300">{'<'}</span>
              <span className="text-foreground group-hover:text-primary transition-all duration-300">NS</span>
              <span className="text-primary group-hover:text-glow transition-all duration-300">{'/>'}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "font-mono text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary",
                    activeSection === item.id 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary hover:bg-primary/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-primary/20 animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full justify-start font-mono text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary",
                    activeSection === item.id 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Quick Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 group relative",
                activeSection === item.id 
                  ? "bg-primary border-primary shadow-lg cyber-glow" 
                  : "border-primary/30 hover:border-primary/50"
              )}
              title={item.label}
            >
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-card border border-primary/20 px-2 py-1 rounded text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;