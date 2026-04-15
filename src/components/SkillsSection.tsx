const skills = [
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 90, icon: "🎨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "React", level: 80, icon: "⚛️" },
  { name: "Next.js", level: 70, icon: "▲" },
  { name: "Tailwind CSS", level: 90, icon: "💨" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">My Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal bg-background rounded-2xl p-6 hover-lift shadow-soft border border-border/50 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{skill.name}</span>
                    <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                  </div>
                </div>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    background: "var(--gradient-primary)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
