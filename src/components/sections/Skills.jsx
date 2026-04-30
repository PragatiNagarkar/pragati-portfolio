import React from 'react';
import { skillGroups } from '../../mock';
import { SectionHeader } from './About';

const Skills = () => {
  return (
    <section id="skills" data-testid="skills-section" className="py-20 lg:py-28 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// skills"
          title="Tech I work with"
          subtitle="A growing toolbox spanning front-end, back-end, core languages and the areas I'm actively exploring."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              data-testid={`skill-group-${group.id}`}
              className="rounded-2xl border border-border bg-card/60 p-6 card-lift"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <p className="font-mono text-xs text-primary tracking-widest uppercase">
            // currently exploring
          </p>
          <p className="mt-3 text-foreground text-lg leading-relaxed">
            I'm in an active exploration phase — experimenting across{' '}
            <span className="text-primary">AI</span>,{' '}
            <span className="text-primary">UI/UX</span>,{' '}
            <span className="text-primary">Networking</span> and{' '}
            <span className="text-primary">Cybersecurity</span> to find the
            intersection that excites me the most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
