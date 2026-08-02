"use client";

import { motion } from "framer-motion";
import { skillCategories, coreCompetencyLevels } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-heading mt-4">A well-rounded financial operations toolkit.</h2>
      </motion.div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950 dark:text-white">
                {cat.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="badge-pill !py-1 !px-3 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass-card p-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950 dark:text-white">
            Core Competencies
          </h3>
          <div className="mt-6 space-y-5">
            {coreCompetencyLevels.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-navy-900/80 dark:text-white/75">
                    {skill.name}
                  </span>
                  <span className="text-navy-900/40 dark:text-white/40">{skill.level}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-950/8 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-softblue-500 to-navy-900 dark:from-softblue-400 dark:to-softblue-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
