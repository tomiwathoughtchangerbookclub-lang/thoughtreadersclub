"use client";

import { motion } from "framer-motion";
import { BookOpen, Feather, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: BookOpen,
    title: "Literary Merit First",
    description:
      "Every book is read in full and judged on its narrative craft, intellectual depth, and lasting cultural contribution. No marketing budgets, no social metrics, no shortcuts.",
  },
  {
    icon: Feather,
    title: "Independent Voice",
    description:
      "The club operates without commercial pressure. Selection criteria stay focused on the writing itself, funded entirely by our private patron network.",
  },
  {
    icon: Award,
    title: "Permanent Recognition",
    description:
      "Selected books receive a full year of structured engagement that builds lasting review momentum and cultural recognition long after the cycle closes.",
  },
];

export function Committee() {
  return (
    <section id="committee" className="relative bg-[#F7F2E8] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              The Founder
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          {/* Founder image — the brand logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 relative"
          >
            <div className="relative h-28 w-28 mx-auto rounded-full overflow-hidden ring-4 ring-[#B8924A] shadow-xl bg-[#1A2F26]">
              <Image
                src="/images/logo.png"
                alt="Dr. Tomiwa Johnson"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </motion.div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            Dr. Tomiwa Johnson
          </h2>

          <div className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8924A]">
            Founder and Selection Committee Chair
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            Dr. Tomiwa Johnson founded ThoughtReadersClub in 2017 with a simple
            conviction that the best independent writing deserves a longer, more
            serious conversation. With roots in narrative structure and
            community building, he leads the selection committee, steers the
            annual residency cycle, and personally reads every submission that
            reaches the shortlist. There is no committee bureaucracy. Every
            decision comes down to one reader who cares about the lasting life
            of a book.
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-[#E5DCC4] bg-white p-7 transition-all hover:shadow-lg hover:shadow-[#1A2F26]/8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A2F26] text-[#B8924A]">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif-display text-lg font-semibold text-[#1A2F26]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5C6B5F]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 text-sm text-[#5C6B5F]"
        >
          <ShieldCheck className="h-5 w-5 text-[#B8924A]" />
          <span>
            Every submission is read in full and answered personally by Dr.
            Tomiwa Johnson.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
