import React from 'react';
import { profile, socials } from '../mock';
import { Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {profile.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            {profile.role} — always curious, always building.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
            Connect
          </h4>
          <ul className="mt-3 flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  data-testid={`footer-social-${s.id}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
            Reach Out
          </h4>
          <p className="mt-3 text-sm text-muted-foreground break-all">
            {profile.email}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.phone}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-primary fill-primary" /> and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
