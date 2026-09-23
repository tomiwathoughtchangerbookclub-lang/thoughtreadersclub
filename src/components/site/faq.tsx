"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ThoughtReadersClub select books for the residency?",
    answer:
      "Every submission is read in full by at least two members of the selection committee. Books are evaluated on intellectual depth, narrative craft, and the lasting cultural contribution they could make. We do not weigh marketing budgets, social media following, or commercial trends. Roughly fifteen titles are accepted into each annual cycle from hundreds of submissions.",
  },
  {
    question: "Is this a paid service for authors?",
    answer:
      "No. There is no pay to play model anywhere in our process. Authors do not pay to be considered, and they do not pay to participate in the residency. Our infrastructure is funded through our private network of patrons, which keeps the selection criteria focused entirely on literary merit.",
  },
  {
    question: "What does the twelve month residency actually include?",
    answer:
      "Selected authors receive a structured year long engagement program. That includes weekly salon discussions around your work, private digital channels for analytical commentary, hosted author Q&A sessions, direct access to the selection committee, and the long tail review momentum that comes from a community treating your book as a permanent cultural contribution rather than a one time release.",
  },
  {
    question: "Can anyone join as a reader?",
    answer:
      "Membership as a reader is by application. We keep the community intentionally small to protect the quality of conversation. Prospective members complete a short application that helps us understand reading habits and what they hope to gain from the salon. Most applicants hear back within two weeks of submitting.",
  },
  {
    question: "How is this different from a regular book club?",
    answer:
      "A typical book club meets once a month around a single title and moves on. Our residency treats one book as the focus of a full year of structured engagement, with weekly salons, analytical commentary, and a permanent archive of discussion. The point is not to consume more books. It is to give the right books the lasting attention they deserve.",
  },
  {
    question: "Who funds the community infrastructure?",
    answer:
      "Our distribution, community infrastructure, and engagement programs are funded through our private network of patrons and Hub Patron memberships. This independence is intentional. It allows our selection criteria to remain purely focused on literary merit and narrative impact, without any commercial pressure on the committee.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              Common Questions
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            Everything you need to know before applying
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            Whether you are a reader considering membership or an author
            considering submission, here are the questions we hear most often.
            If something is not covered here, the contact form below reaches the
            committee directly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3"
            defaultValue="item-0"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="overflow-hidden rounded-xl border border-[#E5DCC4] bg-white px-6"
              >
                <AccordionTrigger className="py-5 text-left font-serif-display text-lg font-semibold text-[#1A2F26] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-[#5C6B5F]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
