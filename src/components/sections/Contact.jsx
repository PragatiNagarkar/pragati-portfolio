import React, { useState } from 'react';
import { profile, socials } from '../../mock';
import { SectionHeader } from './About';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: 'Please fill in all fields',
        description: 'Name, email and message are required.',
        variant: 'destructive',
      });
      return;
    }

    // Frontend-only: open the user's email client with the message pre-filled
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Pragati,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    toast({
      title: 'Opening your email client…',
      description: "If it didn't open, just email me directly.",
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="py-20 lg:py-28 border-t border-border/60 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// contact"
          title="Let's build something together"
          subtitle="I'm actively looking for internships and entry-level opportunities. If you have a role in mind or just want to chat — drop a message."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10">
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

            <div className="rounded-2xl border border-border bg-card/60 p-5">
              <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                Socials
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
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

          {/* Form column */}
          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-foreground">
                  Your Name
                </Label>
                <Input
                  data-testid="contact-input-name"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground">
                  Email
                </Label>
                <Input
                  data-testid="contact-input-email"
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="message" className="text-sm text-foreground">
                Message
              </Label>
              <Textarea
                data-testid="contact-input-message"
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                placeholder="Tell me about the role or idea you have in mind..."
                className="bg-background border-border focus-visible:ring-primary resize-none"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Typically replies within 24–48 hours.
              </p>
              <Button
                data-testid="contact-submit-btn"
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-shine h-11 px-5"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
