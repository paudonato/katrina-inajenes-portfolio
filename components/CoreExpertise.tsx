"use client";

import { motion } from "framer-motion";
import {
  Landmark, Receipt, RefreshCcw, CreditCard, FileText, Send, BarChart3,
  ShieldCheck, Database, Layers, Calculator, Users, ClipboardCheck, Handshake,
  type LucideIcon,
} from "lucide-react";
import { coreExpertise } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Landmark, Receipt, RefreshCcw, CreditCard, FileText, Send, BarChart3,
  ShieldCheck, Database, Layers, Calculator, Users, ClipboardCheck, Handshake,
};

export default function CoreExpertise() {
  return (
    <section id="expertise" className="bg-mist/60 py-24 dark:bg-white/[0.02] md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Core Expertise</span>
          <h2 className="section-heading mt-4">Where she delivers the most value.</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreExpertise.map((card, i) => {
            const Icon = icons[card.icon] ?? Landmark;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-white transition-colors duration-300 group-hover:bg-softblue-600 dark:bg-white dark:text-navy-950 dark:group-hover:bg-softblue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60 dark:text-white/60">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
