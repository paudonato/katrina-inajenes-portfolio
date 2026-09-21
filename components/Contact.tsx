"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { contactInfo } from "@/lib/data";

const cards = [
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: contactInfo.linkedin },
  { icon: MapPin, label: "Location", value: contactInfo.location, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a recruiter"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-container py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-heading mt-4">Let&apos;s talk about your open role.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-900/60 dark:text-white/60 md:text-base">
          Open to Accounts Receivable, Sales Ledger, Billing, Collections, and Financial
          Operations opportunities. Reach out directly or send a message below.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass-card flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white dark:bg-white dark:text-navy-950">
                    <card.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-navy-900/45 dark:text-white/40">
                      {card.label}
                    </p>
                    <p className="truncate text-sm font-medium text-navy-950 dark:text-white">
                      {card.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="glass-card flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-white dark:bg-white dark:text-navy-950">
                    <card.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-navy-900/45 dark:text-white/40">
                      {card.label}
                    </p>
                    <p className="truncate text-sm font-medium text-navy-950 dark:text-white">
                      {card.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass-card space-y-4 p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border border-navy-950/10 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-softblue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-navy-950/10 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-softblue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Tell me about the role..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-navy-950/10 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-softblue-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
          <button type="submit" className="btn-primary w-full sm:w-auto">
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
