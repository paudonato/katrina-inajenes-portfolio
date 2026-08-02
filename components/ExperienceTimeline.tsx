"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-mist/60 py-24 dark:bg-white/[0.02] md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-heading mt-4">A track record built on accuracy.</h2>
        </motion.div>

        <div className="relative mt-14 space-y-10 border-l border-navy-950/10 pl-8 dark:border-white/10 md:pl-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+9px)] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-white shadow-md dark:bg-white dark:text-navy-950 md:-left-[calc(2.5rem+9px)]">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-navy-950 dark:text-white">
                    {item.role}
                  </h3>
                  <span className="badge-pill !py-1 text-xs">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-softblue-600 dark:text-softblue-400">
                  {item.company}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-relaxed text-navy-900/70 dark:text-white/65"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-softblue-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: experience.length * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+9px)] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-navy-400/20 text-navy-900 dark:bg-white/10 dark:text-white md:-left-[calc(2.5rem+9px)]">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-navy-950 dark:text-white">
                  {education.degree}
                </h3>
                <span className="badge-pill !py-1 text-xs">{education.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-softblue-600 dark:text-softblue-400">
                {education.school}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
