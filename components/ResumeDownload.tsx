"use client";

import { motion } from "framer-motion";
import { Download, FileCheck2 } from "lucide-react";

export default function ResumeDownload() {
  return (
    <section className="section-container pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-16 text-center dark:bg-white/5 md:px-16"
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-softblue-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-softblue-400/15 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <FileCheck2 className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            See the full picture, in one document.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            A complete record of six-plus years in accounts receivable, sales ledger management,
            billing, collections, and reconciliation — ready for your next hiring decision.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-navy-950 transition-all duration-300 hover:bg-softblue-300 hover:shadow-lg hover:shadow-softblue-500/30"
          >
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </a>
        </div>
      </motion.div>
    </section>
  );
}
