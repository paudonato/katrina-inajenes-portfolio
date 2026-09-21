"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-paper dark:bg-navy-950">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-softblue-400/25 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] animate-blob rounded-full bg-navy-400/20 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] animate-blob rounded-full bg-softblue-300/20 blur-3xl [animation-delay:8s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(11,18,32,0.06)_1px,transparent_0)] bg-[length:32px_32px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)]" />
      </div>

      <div className="section-container grid items-center gap-14 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-eyebrow">Accounts Receivable &amp; Sales Ledger Specialist</span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy-950 dark:text-white md:text-6xl">
            Katrina Paula
            <br />
            Inajenes
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium text-navy-900/70 dark:text-white/70">
            Accounts Receivable Specialist
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-900/60 dark:text-white/60">
            6+ years across sales ledger management, billing, collections, payment application,
            and account reconciliation — including enterprise-scale support for Microsoft&apos;s
            account at Accenture.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/resume.pdf" download className="btn-primary">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-navy-900/50 dark:text-white/50">
            <MapPin className="h-4 w-4" />
            {contactInfo.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mx-auto flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-softblue-400/40 to-navy-900/30 blur-2xl" />
            <div className="glass-card flex h-64 w-64 items-center justify-center rounded-full md:h-80 md:w-80">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-softblue-600 text-5xl font-semibold text-white md:h-72 md:w-72">
                <Image
  src="/2X2.jpeg"
  alt="Katrina Paula Inajenes"
  width={224}
  height={224}
  className="h-56 w-56 rounded-full object-cover"
/>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
