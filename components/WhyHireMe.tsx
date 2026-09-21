"use client";

import { motion } from "framer-motion";
import { Target, LineChart, Users, ShieldCheck, Lightbulb, Clock, TrendingUp, type LucideIcon } from "lucide-react";
import { strengths } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Target, LineChart, Users, ShieldCheck, Lightbulb, Clock, TrendingUp };

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="bg-mist/60 py-24 dark:bg-white/[0.02] md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">Why Hire Me</span>
          <h2 className="section-heading mt-4">
            A finance professional recruiters can build a team around.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-900/65 dark:text-white/60">
            Six-plus years across accounts receivable, sales ledger management, billing, and
            reconciliation has sharpened a specific combination of traits: the discipline to
            catch what others miss, the communication skill to resolve billing queries and
            collections issues, and the drive to improve how the work gets done.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => {
            const Icon = icons[item.icon] ?? Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-white dark:bg-white dark:text-navy-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60 dark:text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
