import React from 'react';
import { education } from '../../mock';
import { SectionHeader } from './About';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" data-testid="education-section" className="py-20 lg:py-28 border-t border-border/60 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// education"
          title="Academic Journey"
          subtitle="A steady progression through foundational programs, currently advancing toward a B.Tech in Information Technology."
        />

        <div className="mt-14 relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {education.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  data-testid={`education-item-${item.id}`}
                  className="relative md:grid md:grid-cols-2 md:gap-10 items-center"
                >
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      left ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <div
                      className={`inline-flex flex-col rounded-2xl border border-border bg-card p-6 card-lift max-w-xl ${
                        left ? 'md:ml-auto text-left md:text-right' : ''
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${
                          left ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-mono text-xs text-primary tracking-wider">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.school}
                      </p>
                      <div
                        className={`mt-4 inline-flex items-center gap-2 text-xs font-medium text-foreground ${
                          left ? 'md:self-end' : 'md:self-start'
                        }`}
                      >
                        <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
