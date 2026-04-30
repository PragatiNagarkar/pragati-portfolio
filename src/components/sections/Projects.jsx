import React from 'react';
import { projects } from '../../mock';
import { SectionHeader } from './About';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" data-testid="projects-section" className="py-20 lg:py-28 border-t border-border/60 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          kicker="// projects"
          title="Featured Work"
          subtitle="Hands-on projects where I applied what I learned — full-stack web, Android and AI."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a
              key={p.id}
              data-testid={`project-card-${p.id}`}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 card-lift flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>

              <p className="mt-5 font-mono text-[11px] tracking-widest uppercase text-primary">
                {p.type}
              </p>
              <h3 className="mt-1.5 text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-secondary text-[11px] font-medium text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            data-testid="projects-github-link"
            href="https://github.com/PragatiNagarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            See more on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
