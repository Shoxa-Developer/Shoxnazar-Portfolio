import { Monitor, Smartphone, Palette } from "lucide-react";

const services = [
  { icon: Monitor, title: "Frontend Development", desc: "Building fast, interactive web applications with React, Next.js and modern best practices.", emoji: "💻" },
  { icon: Smartphone, title: "Responsive Design", desc: "Ensuring every website looks stunning and works perfectly across all devices and screen sizes.", emoji: "📱" },
  { icon: Palette, title: "UI/UX Implementation", desc: "Transforming Figma designs and mockups into pixel-perfect, accessible user interfaces.", emoji: "🎨" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What I <span className="gradient-text">offer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal bg-background rounded-2xl p-8 text-center hover-lift shadow-soft border border-border/50 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 gradient-subtle-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg mb-6 shadow-lg group-hover:glow-strong transition-all duration-300 group-hover:scale-110">
                  <s.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
