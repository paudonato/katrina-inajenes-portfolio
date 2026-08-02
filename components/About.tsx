"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "6+ years in Accounts Receivable, Collections & Reconciliation",
  "Enterprise-scale experience via Accenture's Microsoft account",
  "Fluent across Oracle, SAP, Dynamics 365 & Opera Cloud",
  "Advanced Excel — PivotTables, XLOOKUP, formula-driven analysis",
];

export default function About() {
  return (
    <section id="about" className="section-container py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-heading mt-4">
            Financial accuracy, built on six years of high-volume experience.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-900/70 dark:text-white/65">
            <p>
              Katrina Paula Inajenes is a detail-driven Accounts Receivable and Reconciliation
              professional with six-plus years managing high-volume financial operations for
              global enterprise clients. She has processed thousands of invoices and payments,
              resolved complex billing disputes, and maintained accurate records across ERP
              systems including Oracle, SAP, and Microsoft Dynamics 365.
            </p>
            <p>
              Her time managing collections for Microsoft&apos;s account at Accenture reflects an
              ability to operate with precision at the highest levels of enterprise finance —
              equally comfortable investigating a payment discrepancy or walking a client through
              an invoice dispute with clarity and calm.
            </p>
            <p>
              She is driven by continuous improvement: always looking for ways to tighten
              processes, resolve accounts faster, and strengthen the accuracy of every financial
              record she touches.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card flex flex-col justify-center gap-5 p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-navy-950 dark:text-white">
            Quick Facts
          </h3>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-softblue-600 dark:text-softblue-400" />
                <span className="text-sm leading-relaxed text-navy-900/75 dark:text-white/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
