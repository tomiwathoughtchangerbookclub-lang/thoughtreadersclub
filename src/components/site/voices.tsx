"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The depth of discussion generated around my book was staggering. ThoughtReadersClub did not just give me readers. They gave my work a legacy, treating the text with a level of consideration that is incredibly rare in the modern publishing landscape.",
    name: "Residency Alumnus",
    role: "Author, 2024 Cycle",
    initials: "RA",
    perspective: "Author perspective",
  },
  {
    quote:
      "In a sea of surface level internet commentary, this reading circle is a sanctuary. The discussions are consistently high signal, challenging, and deeply rewarding. I have read more carefully this year than I have in the last decade.",
    name: "Core Book Club Member",
    role: "Reader, London Circle",
    initials: "CB",
    perspective: "Reader perspective",
  },
  {
    quote:
      "What sets this community apart is the patience. My book was given a full year of serious engagement, and the reviews that came out of it still surface in conversations eighteen months later. That kind of long tail momentum is impossible to manufacture.",
    name: "Independent Author",
    role: "Residency, 2023 Cycle",
    initials: "IA",
    perspective: "Author perspective",
  },
];

export function Voices() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#1A2F26] py-24 md:py-32"
    >
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#B8924A]/10 blur-3xl" />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#B8924A]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              Community
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#F7F2E8] sm:text-4xl md:text-5xl text-balance">
            What authors and readers say about us
          </h2>

          <div className="mt-6 flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-[#B8924A] text-[#B8924A]"
              />
            ))}
            <span className="ml-2 text-sm text-[#F7F2E8]/70">
              4.9 average from 2,000+ active readers
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 p-8 backdrop-blur-sm"
            >
              <Quote className="h-10 w-10 text-[#B8924A]/60" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-[#F7F2E8]/85 italic">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-[#F7F2E8]/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B8924A]/20 font-serif-display text-base font-bold text-[#B8924A]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-serif-display text-base font-semibold text-[#F7F2E8]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#B8924A]">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#F7F2E8]/40">
                {t.perspective}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
