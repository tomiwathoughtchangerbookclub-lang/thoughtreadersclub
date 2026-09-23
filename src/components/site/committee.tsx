"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const committee = [
  {
    name: "Dr. Tomiwa",
    role: "Founder and Selection Committee Chair",
    image:
      "https://demo.awaikenthemes.com/hairline/wp-content/uploads/2026/05/team-1.jpg",
    bio: "Dr. Tomiwa founded ThoughtReadersClub in 2021 with a simple conviction that the best independent writing deserves a longer, more serious conversation. With roots in narrative structure and community building, he leads the selection committee and steers the annual residency cycle.",
  },
  {
    name: "Adaeze Okonkwo",
    role: "Senior Literary Curator",
    image:
      "https://demo.awaikenthemes.com/hairline/wp-content/uploads/2026/05/team-2.jpg",
    bio: "Adaeze reviews hundreds of independent titles each year alongside Dr. Tomiwa. She brings two decades of editorial experience and a particular interest in voices writing from the African continent and its diaspora.",
  },
  {
    name: "Margaret Holloway",
    role: "Cultural Programs Advisor",
    image:
      "https://demo.awaikenthemes.com/hairline/wp-content/uploads/2026/05/team-3.jpg",
    bio: "Margaret designs the salon format and oversees the global cultural calendar. She has organized literary events across three continents and is the reason each residency feels like a curated journey rather than a checklist.",
  },
];

export function Committee() {
  return (
    <section id="committee" className="relative bg-[#F7F2E8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              The Committee
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            Meet the minds behind the selection process
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            Our curation process is steered by Dr. Tomiwa alongside a dedicated
            team of literary specialists, academic minds, and cultural curators.
            Together they review hundreds of independent titles annually to
            discover the rare few that match our standard for intellectual
            depth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {committee.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-[#E5DCC4] bg-white transition-all hover:shadow-xl hover:shadow-[#1A2F26]/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F26]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <a
                    href="#contact"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F2E8]/90 text-[#1A2F26] transition-colors hover:bg-[#B8924A]"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F2E8]/90 text-[#1A2F26] transition-colors hover:bg-[#B8924A]"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif-display text-xl font-bold text-[#1A2F26]">
                  {member.name}
                </h3>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
                  {member.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#5C6B5F]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
