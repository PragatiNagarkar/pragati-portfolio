import React, { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks, profile } from '../mock';
import { Button } from './ui/button';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= y) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          data-testid="navbar-logo"
          onClick={() => handleClick('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">
            {profile.firstName}
            <span className="text-primary">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                data-testid={`nav-link-${link.id}`}
                onClick={() => handleClick(link.id)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            data-testid="navbar-cta"
            onClick={() => handleClick('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 btn-shine"
          >
            Let's Connect
          </Button>
        </div>

        <button
          data-testid="navbar-menu-toggle"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  data-testid={`mobile-nav-link-${link.id}`}
                  onClick={() => handleClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm ${
                    active === link.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                data-testid="mobile-navbar-cta"
                onClick={() => handleClick('contact')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Let's Connect
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
