import React from 'react';
import { profile, socials } from '../../mock';
import { SectionHeader } from './About';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-28 border-t border-border/60 bg-card/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// contact"
          title="Let's build something together"
          subtitle="I'm actively looking for internships and entry-level opportunities. If you have a role in mind or just want to chat — drop a message via email or connect on socials."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Info column */}
          <div className="space-y-4">
            {contactInfo.map((c) => {
              const Wrapper = c.href ? 'a' : 'div';
              const props = c.href
                ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={c.label}
                  data-testid={`contact-info-${c.label.toLowerCase()}`}
                  {...props}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 card-lift"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 text-foreground font-medium break-all">
                      {c.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Socials column */}
          <div className="rounded-2xl border border-border bg-card/60 p-6 flex flex-col justify-center">
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4 text-center md:text-left">
              Socials
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.id}
                  data-testid={`contact-social-${s.id}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary text-sm text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
