"use client";

import { motion } from "framer-motion";
import { Award, Clock, Receipt, Building2, Layers, type LucideIcon } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { achievements } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Award, Clock, Receipt, Building2, Layers };

export default function Achievements() {
  return (
    <section className="section-container py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="section-eyebrow">Achievements</span>
        <h2 className="section-heading mt-4">Impact, measured.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, i) => {
          const Icon = icons[item.icon] ?? Clock;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card flex flex-col items-center p-8 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-white dark:bg-white dark:text-navy-950">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-3xl font-semibold tracking-tight text-navy-950 dark:text-white">
                {item.value !== null ? (
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                ) : (
                  item.display
                )}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/60 dark:text-white/60">
                {item.label}
              </p>
              {item.details && (
                <div className="mt-4 space-y-1 text-xs leading-relaxed text-navy-900/50 dark:text-white/50">
                  {item.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              )}
              {item.certificateHref && (
                <a
                  href={item.certificateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6 !px-4 !py-2 text-xs"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
