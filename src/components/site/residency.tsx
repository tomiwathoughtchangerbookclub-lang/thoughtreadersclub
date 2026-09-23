"use client";

import { motion } from "framer-motion";
import {
  CalendarRange,
  MessageSquareQuote,
  TrendingUp,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: CalendarRange,
    title: "Structured Reading Journey",
    description:
      "When a book is selected, it enters a twelve month ecosystem of guided deep engagement with an elite reader base. Every month brings new discussion prompts, hosted book groups, and structured reading pathways that turn a single title into a year long conversation.",
  },
  {
    icon: MessageSquareQuote,
    title: "High Signal Book Discussions",
    description:
      "Our private channels and active book discussions generate consistent analytical commentary that reflects the true depth of each work. Members meet weekly in small groups to examine language, structure, and the cultural questions a book raises.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Review Velocity",
    description:
      "We cultivate long tail momentum for every author by guiding an elite reader base through structured engagement, ensuring sustainable review velocity and permanent intellectual recognition rather than a one week sales spike.",
  },
  {
    icon: Users,
    title: "Selection Committee Access",
    description:
      "Selected authors work directly with our committee of literary specialists, academic minds, and cultural curators. You get honest editorial feedback, network introductions, and a partner invested in the long life of your work.",
  },
];

export function Residency() {
  return (
    <section id="residency" className="relative bg-[#1A2F26] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              The Residency
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#F7F2E8] sm:text-4xl md:text-5xl text-balance">
            A year long immersion for the books that earn it
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#F7F2E8]/70 md:text-lg">
            The Residency is not a passive book club selection. It is an active,
            twelve month immersion program that treats each selected title as a
            permanent cultural contribution worth a sustained conversation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 p-7 transition-all hover:border-[#B8924A]/40 hover:bg-[#F7F2E8]/8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B8924A]/15 text-[#B8924A] transition-colors group-hover:bg-[#B8924A] group-hover:text-[#1A2F26]">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif-display text-xl font-semibold text-[#F7F2E8]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F7F2E8]/65">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
                <span>0{idx + 1}</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-serif-display text-xl italic text-[#F7F2E8]/80 md:text-2xl">
            “When the right minds meet the right text, impact is inevitable.”
          </p>
        </div>
      </div>
    </section>
  );
}
