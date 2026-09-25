"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    bookTitle: "",
    genre: "Literary Fiction",
    synopsis: "",
    why: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toEmail = "drtomiwathoughtreadersclub@gmail.com";
    const subject = `ThoughtReadersClub Submission: ${form.bookTitle || "Untitled"} by ${form.name || "Applicant"}`;
    const body = [
      `New submission for the ThoughtReadersClub residency.`,
      ``,
      `--- Author Details ---`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      ``,
      `--- Book Details ---`,
      `Title: ${form.bookTitle}`,
      `Genre: ${form.genre}`,
      ``,
      `--- Synopsis ---`,
      `${form.synopsis}`,
      ``,
      `--- Why this book belongs in ThoughtReadersClub ---`,
      `${form.why}`,
      ``,
      `--- Additional notes ---`,
      `${form.message || "None"}`,
    ].join("\n");

    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              Contact
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            Submit your book for committee consideration
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            To keep our reading circles high signal, we only open fifteen
            author slots each year. If your work aligns with our mission of
            uncovering meaningful books in overlooked places, fill out the form
            below. Dr. Tomiwa Johnson reads every submission personally and
            replies within four weeks.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-14 rounded-2xl border border-[#E5DCC4] bg-white p-8 md:p-10 shadow-xl shadow-[#1A2F26]/8"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1A2F26]">
                <CheckCircle2 className="h-10 w-10 text-[#B8924A]" />
              </div>
              <h3 className="mt-6 font-serif-display text-3xl font-bold text-[#1A2F26]">
                Your email is ready to send
              </h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#5C6B5F]">
                Your email app should now be open with all your submission
                details pre filled and addressed to Dr. Tomiwa Johnson at
                drtomiwathoughtreadersclub@gmail.com. Just hit send and he will
                read your submission in full and reply personally within four
                weeks.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    bookTitle: "",
                    genre: "Literary Fiction",
                    synopsis: "",
                    why: "",
                    message: "",
                  });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8924A] px-6 py-3 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#D4AF6E]"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                  >
                    Email address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="bookTitle"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                  >
                    Book title *
                  </label>
                  <input
                    id="bookTitle"
                    required
                    value={form.bookTitle}
                    onChange={(e) => setForm({ ...form, bookTitle: e.target.value })}
                    placeholder="Title of your work"
                    className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="genre"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                  >
                    Genre *
                  </label>
                  <select
                    id="genre"
                    value={form.genre}
                    onChange={(e) => setForm({ ...form, genre: e.target.value })}
                    className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                  >
                    <option>Literary Fiction</option>
                    <option>Historical Fiction</option>
                    <option>Memoir</option>
                    <option>Essays</option>
                    <option>Short Stories</option>
                    <option>Poetry</option>
                    <option>Nonfiction</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="synopsis"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                >
                  Brief synopsis *
                </label>
                <textarea
                  id="synopsis"
                  rows={4}
                  required
                  value={form.synopsis}
                  onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
                  placeholder="Three to five sentences describing what your book is about. Focus on the central question or conflict."
                  className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="why"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                >
                  Why this book belongs in ThoughtReadersClub *
                </label>
                <textarea
                  id="why"
                  rows={4}
                  required
                  value={form.why}
                  onChange={(e) => setForm({ ...form, why: e.target.value })}
                  placeholder="Tell us why your work aligns with our mission of uncovering meaningful books in overlooked places. What makes this book worth a year long conversation?"
                  className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                >
                  Anything else we should know
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Awards, previous works, or anything else relevant to your submission."
                  className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20 resize-none"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#5C6B5F]">
                  We review every submission personally. Expect a reply within
                  four weeks.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A2F26] px-8 py-4 text-sm font-semibold text-[#F7F2E8] transition-all hover:bg-[#2D4538] hover:shadow-lg"
                >
                  Submit your book
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 border-t border-[#E5DCC4] pt-6 text-xs text-[#5C6B5F]">
                <Mail className="h-3.5 w-3.5 text-[#B8924A]" />
                <span>
                  Or email Dr. Tomiwa Johnson directly at{" "}
                  <a
                    href="mailto:drtomiwathoughtreadersclub@gmail.com"
                    className="font-semibold text-[#1A2F26] hover:text-[#B8924A]"
                  >
                    drtomiwathoughtreadersclub@gmail.com
                  </a>
                </span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
