"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export function ClosingCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#1A2F26] py-24 md:py-32">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#B8924A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#B8924A]/8 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#B8924A]/40 text-[#B8924A]">
            <BookOpen className="h-7 w-7" />
          </div>

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              Join the Club
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#F7F2E8] sm:text-4xl md:text-5xl text-balance">
            Submit your book for the next reading cycle
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F7F2E8]/75 md:text-lg">
            To keep our reading circles high signal, we only open fifteen author
            slots each year. If your work aligns with our mission of uncovering
            meaningful books in overlooked places, we would love to hear from
            you. Reach out directly and a member of the selection committee will
            reply within four weeks.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B8924A] px-8 py-4 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#D4AF6E] hover:shadow-xl hover:shadow-[#B8924A]/30"
            >
              Start your application
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:drtomiwathoughtreadersclub@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F7F2E8]/30 px-8 py-4 text-sm font-semibold text-[#F7F2E8] transition-all hover:border-[#B8924A] hover:text-[#B8924A]"
            >
              <Mail className="h-4 w-4" />
              Email the committee
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 px-6 py-5 text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                Submissions open
              </div>
              <div className="mt-2 font-serif-display text-lg font-semibold text-[#F7F2E8]">
                January 2025
              </div>
              <div className="mt-1 text-xs text-[#F7F2E8]/55">
                For the next annual reading cycle
              </div>
            </div>
            <div className="rounded-xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 px-6 py-5 text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                Slots per year
              </div>
              <div className="mt-2 font-serif-display text-lg font-semibold text-[#F7F2E8]">
                15 authors
              </div>
              <div className="mt-1 text-xs text-[#F7F2E8]/55">
                Reviewed in full by the committee
              </div>
            </div>
            <div className="rounded-xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 px-6 py-5 text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#B8924A]">
                Response time
              </div>
              <div className="mt-2 font-serif-display text-lg font-semibold text-[#F7F2E8]">
                Within 4 weeks
              </div>
              <div className="mt-1 text-xs text-[#F7F2E8]/55">
                Personal reply from the committee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
