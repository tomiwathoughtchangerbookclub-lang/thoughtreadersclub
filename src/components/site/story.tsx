"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "The First Reading Circle",
    body: "A handful of readers gathered in a borrowed study to discuss an overlooked debut novel. That single evening became the model for everything that followed: small rooms, serious questions, and books that deserved more attention than they had received.",
  },
  {
    year: "2023",
    title: "Five Thousand Members",
    body: "Through quiet recommendations and word of mouth, the community crossed five thousand engaged readers. We formalized the weekly book discussion format and opened our first private digital channels for international members.",
  },
  {
    year: "2024",
    title: "First Annual Residency",
    body: "We launched the structured twelve month residency program with our inaugural cohort of fifteen authors. Each title received sustained, high signal engagement that translated into lasting review velocity and cultural recognition.",
  },
  {
    year: "2025",
    title: "A Global Hub",
    body: "ThoughtReadersClub now spans continents, with active reading circles in nine cities and a digital hub of more than twenty one thousand engaged readers. The selection committee reviews hundreds of independent titles each year to find the rare few that match our standard.",
  },
];

export function Story() {
  return (
    <section id="story" className="relative bg-[#F7F2E8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              How We Operate
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            Built on mutual respect and intellectual rigor
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            ThoughtReadersClub operates strictly as an independent private
            literary society and curated cultural hub. We are entirely
            transparent about our structure. Our community is built on mutual
            respect and intellectual rigor, not commercial pay to play marketing
            models. We fund our distribution, community infrastructure, and
            engagement programs through our private network, so that our
            selection criteria remain focused on literary merit and narrative
            impact.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-[#E5DCC4] bg-[#E5DCC4] md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#F7F2E8] p-8 transition-colors hover:bg-white"
            >
              <div className="font-serif-display text-5xl font-bold text-[#B8924A]">
                {item.year}
              </div>
              <h3 className="mt-4 font-serif-display text-xl font-semibold text-[#1A2F26]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C6B5F]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
