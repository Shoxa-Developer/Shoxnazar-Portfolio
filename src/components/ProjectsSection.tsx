import { ExternalLink, Github } from "lucide-react";
import projectImg from "@/assets/project-placeholder.jpg";

const projects = [
  {
    title: "Portfolio Website",
    img: "/image.png",
    desc: "A modern portfolio with glassmorphism effects and smooth animations.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Dashboard",
    img: "/e-kartinka.webp",
    desc: "Clean admin dashboard with charts, analytics, and responsive design.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Weather App",
    img: "/havo-rasm.webp",
    desc: "Real-time weather application with beautiful UI and location-based forecasts.",
    tags: ["React", "API"],
  },
  {
    title: "Task Manager",
    img: "/taskmanager-rasm.webp",
    desc: "Productivity app with drag-and-drop, categories, and dark mode support.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Blog Platform",
    img: "/blograsm.avif",
    desc: "Minimal blog with markdown support, syntax highlighting, and fast loading.",
    tags: ["Next.js", "MDX"],
  },
  {
    title: "Landing Page",
    img: "/landingrasm.webp",
    desc: "High-converting SaaS landing page with animations and responsive layout.",
    tags: ["HTML", "CSS", "JS"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 section-alt">
      <div className="container mx-auto max-w-6xl">
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured <span className="gradient-text">work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal bg-background rounded-2xl overflow-hidden hover-lift shadow-soft border border-border/50 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="flex items-center gap-1.5 text-xs font-semibold gradient-bg text-primary-foreground px-3 py-1.5 rounded-full">
                    <ExternalLink size={12} /> Live Demo
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-semibold bg-foreground text-background px-3 py-1.5 rounded-full">
                    <Github size={12} /> GitHub
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full gradient-subtle-bg text-primary font-semibold border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
