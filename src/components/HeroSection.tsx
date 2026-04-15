import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="hero-orb-2 absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[hsl(320_75%_55%/0.08)] blur-[120px]" />
        <div className="hero-orb-3 absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-[hsl(200_85%_60%/0.06)] blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-5 py-2 mb-8 text-xs font-medium text-muted-foreground animate-fade-in">
          <Sparkles size={14} className="text-primary" />
          Available for freelance work
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-6 animate-fade-in tracking-tight"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">Shoxnazar</span>
        </h1>

        <p
          className="text-xl sm:text-2xl font-semibold text-foreground/70 mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Frontend Developer
        </p>

        <p
          className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-10 animate-fade-in leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          I build modern, fast and beautiful web interfaces
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="gradient-bg text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover-lift glow text-sm shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-secondary text-foreground border border-border font-semibold px-8 py-3.5 rounded-full hover-lift text-sm"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
