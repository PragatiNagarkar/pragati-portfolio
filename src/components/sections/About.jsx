import React from 'react';
import { profile } from '../../mock';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Builder Mindset',
    text: 'I turn ideas into working software — web dashboards, Android apps and AI prototypes.',
  },
  {
    icon: Lightbulb,
    title: 'Always Learning',
    text: 'Currently exploring AI, UI/UX and cybersecurity to shape my long-term focus.',
  },
  {
    icon: Rocket,
    title: 'Project Driven',
    text: 'Every concept I study ends up in a hands-on project on my GitHub.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    text: 'I enjoy working on teams, writing clean code and shipping features end-to-end.',
  },
];

const SectionHeader = ({ kicker, title, subtitle }) => (
  <div className="max-w-2xl">
    <p className="font-mono text-xs tracking-widest text-primary uppercase">
      {kicker}
    </p>
    <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const About = () => {
  return (
    <section id="about" data-testid="about-section" className="py-20 lg:py-28 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// about"
          title="A quick intro"
          subtitle={profile.bio}
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              data-testid={`about-pillar-${p.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="rounded-2xl border border-border bg-card/60 p-6 card-lift"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
export { SectionHeader };
