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

        <div className="reveal flex items-center justify-center gap-4 mt-10">
          <h1 className="text-[20px]">Contact-nomer</h1>  +998 93-655-89-59
        </div>
      </div>
    </section>
  );
}
