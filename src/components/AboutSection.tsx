import { Code2, Lightbulb, Rocket, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing readable, maintainable, and well-structured code every single time." },
  { icon: Lightbulb, title: "Fast Learner", desc: "Always exploring cutting-edge technologies, frameworks, and design patterns." },
  { icon: Rocket, title: "Passionate Builder", desc: "Turning creative ideas into polished, pixel-perfect digital experiences." },
  { icon: Zap, title: "Performance First", desc: "Optimizing every detail for blazing-fast load times and smooth interactions." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 section-alt">
      <div className="container mx-auto max-w-5xl">
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            A passionate <span className="gradient-text">young developer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            I'm a 14-year-old frontend developer with a deep passion for building modern web experiences.
            I love turning complex problems into simple, beautiful, and intuitive designs.
            Every day is an opportunity to learn something new and push my skills further.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal bg-background rounded-2xl p-6 text-center hover-lift shadow-soft border border-border/50 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg mb-5 shadow-lg group-hover:glow-strong transition-shadow duration-300">
                <h.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
