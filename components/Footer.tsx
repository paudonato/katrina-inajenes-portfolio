import { Mail, Linkedin, ArrowUp } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-navy-950/8 bg-paper py-10 dark:border-white/10 dark:bg-navy-950">
      <div className="section-container flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-navy-950 dark:text-white">
            {contactInfo.name}
          </p>
          <p className="mt-1 text-xs text-navy-900/50 dark:text-white/45">
            Accounts Receivable &amp; Reconciliation Specialist · {contactInfo.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/10 text-navy-900 transition-colors hover:border-softblue-500 hover:text-softblue-600 dark:border-white/15 dark:text-white dark:hover:border-softblue-400"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/10 text-navy-900 transition-colors hover:border-softblue-500 hover:text-softblue-600 dark:border-white/15 dark:text-white dark:hover:border-softblue-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/10 text-navy-900 transition-colors hover:border-softblue-500 hover:text-softblue-600 dark:border-white/15 dark:text-white dark:hover:border-softblue-400"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-navy-900/40 dark:text-white/35">
          © {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
