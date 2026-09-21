"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Accounts Receivable Specialist at HGV Training Services Limited",
  "Sales ledger, billing, collections, and credit control experience",
  "Enterprise-scale experience via Accenture's Microsoft account",
  "Oracle, SAP, Dynamics 365, QuickBooks & Salesforce",
  "Advanced Excel, IFRS 15, and revenue recognition knowledge",
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
              Katrina Paula Inajenes is an Accounts Receivable Specialist with six-plus years of
              experience across sales ledger management, billing, collections, credit control,
              payment application, and account reconciliation. In her current role with HGV
              Training Services Limited, she supports accurate invoicing, client receipts,
              month-end reporting, aged debt analysis, and billing query resolution.
            </p>
            <p>
              Her experience supporting Microsoft&apos;s account at Accenture, alongside roles at
              MicroSourcing, reflects an ability to operate with precision across enterprise
              finance environments. She is comfortable investigating payment discrepancies,
              reconciling bank and customer accounts, and resolving invoice queries with clarity.
            </p>
            <p>
              She brings working knowledge of IFRS 15 and revenue recognition, including
              performance obligations, milestone billing, and deferred revenue, supported by
              advanced Microsoft Excel skills for analysis and reconciliations.
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
