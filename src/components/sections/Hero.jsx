import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile, stats, quickFacts } from '../../mock';
import { Button } from '../ui/button';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            {profile.available}
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text">{profile.firstName}</span>.
            <br />
            <span className="text-foreground/90">{profile.role}.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {profile.tagline} Full-stack curious, mobile-friendly, and always exploring AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              data-testid="hero-view-work-btn"
              onClick={() => handleScroll('projects')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-shine h-11 px-5"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              data-testid="hero-contact-btn"
              variant="outline"
              onClick={() => handleScroll('contact')}
              className="h-11 px-5 border-border text-foreground hover:bg-secondary hover:text-foreground"
            >
              <Mail className="mr-2 w-4 h-4" />
              Get in Touch
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a
              data-testid="hero-github-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              data-testid="hero-linkedin-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="h-4 w-px bg-border" />
            <span className="font-mono text-xs">{profile.location}</span>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            {stats.map((s) => (
              <div
                key={s.label}
                data-testid={`hero-stat-${s.label.replace(/\s+/g, '-').toLowerCase()}`}
                className="rounded-xl border border-border bg-card/60 p-4"
              >
                <div className="text-2xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto lg:ml-auto">
          <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[4/5] animate-float-slow">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 via-blue-500/20 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border bg-card">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-background/70 backdrop-blur-md p-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-muted-foreground">status:</span>
                  <span className="text-foreground">available_for_hire</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 max-w-[400px] mx-auto">
            {quickFacts.map((f) => (
              <div
                key={f.label}
                className="rounded-lg border border-border bg-card/60 px-3 py-2.5 flex items-center gap-2"
              >
                <f.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[11px] text-muted-foreground leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
