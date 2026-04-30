import React from 'react';
import { certifications } from '../../mock';
import { SectionHeader } from './About';
import { BadgeCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" data-testid="certifications-section" className="py-20 lg:py-28 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// certifications"
          title="Credentials & Learning"
          subtitle="Courses I completed to deepen my understanding across core IT domains."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c) => (
            <div
              key={c.id}
              data-testid={`certification-card-${c.id}`}
              className="relative rounded-2xl border border-border bg-card/60 p-6 card-lift overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative flex items-start justify-between">
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <BadgeCheck className="w-5 h-5 text-primary/70" />
              </div>
              <h3 className="relative mt-5 font-semibold text-foreground leading-snug">
                {c.title}
              </h3>
              <p className="relative mt-1.5 text-sm text-muted-foreground">
                {c.issuer}
              </p>
              <p className="relative mt-4 font-mono text-xs text-primary">
                · {c.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
