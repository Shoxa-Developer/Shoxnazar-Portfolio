import { useState } from "react";
import { Send, MessageCircle, ArrowRight } from "lucide-react";

function SocialLink({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="bg-secondary border border-border w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover-lift transition-all" aria-label={label}>
      {children}
    </a>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 section-alt">
      <div className="container mx-auto max-w-2xl">
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Get in <span className="gradient-text">touch</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">Have a project in mind? Let's work together.</p>
        </div>

        <form onSubmit={handleSubmit} className="reveal bg-background rounded-2xl p-8 shadow-card border border-border/50 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground mb-1.5 block">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-bg text-primary-foreground font-bold py-4 rounded-xl hover-lift glow flex items-center justify-center gap-2 text-sm shadow-lg"
          >
            Send Message <ArrowRight size={16} />
          </button>
        </form>

        <div className="reveal flex justify-center gap-4 mt-10">
          <SocialLink label="Telegram" href="#">
            <MessageCircle size={18} />
          </SocialLink>
          <SocialLink label="Instagram" href="#">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </SocialLink>
          <SocialLink label="GitHub" href="#">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
}
