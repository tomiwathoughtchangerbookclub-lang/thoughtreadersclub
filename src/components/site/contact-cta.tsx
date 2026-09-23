"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Author",
    bookTitle: "",
    synopsis: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#1A2F26]">
      {/* Top CTA banner with image background */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/cta-reader.jpg"
            alt="A reader in a leather armchair surrounded by bookshelves"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F26]/95 via-[#1A2F26]/85 to-[#1A2F26]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                For Independent Authors
              </span>
            </div>
            <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#F7F2E8] sm:text-4xl md:text-5xl text-balance">
              Submit your work for committee consideration
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#F7F2E8]/75 md:text-lg">
              To maintain the exceptional quality of our high signal salons, our
              infrastructure only accommodates fifteen standout authors per
              annual cycle. If your work aligns with our mission of uncovering
              meaningful stories in overlooked places, submit your details below
              for committee consideration.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact form section */}
      <div className="bg-[#1A2F26] py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif-display text-2xl font-bold text-[#F7F2E8] md:text-3xl">
                Reach the committee directly
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F7F2E8]/70">
                Each submission is read by a member of the selection committee.
                We aim to respond within four weeks of receiving your details.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#B8924A]">
                    Email
                  </div>
                  <div className="mt-1 text-[#F7F2E8]">
                    committee@thoughtreadersclub.com
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#B8924A]">
                    Salon hours
                  </div>
                  <div className="mt-1 text-[#F7F2E8]">
                    Monday to Friday, 9am to 6pm WAT
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#B8924A]">
                    Annual cycle
                  </div>
                  <div className="mt-1 text-[#F7F2E8]">
                    Submissions open January 2026
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 p-7 backdrop-blur-sm"
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-[#B8924A]" />
                  <h4 className="mt-4 font-serif-display text-2xl font-bold text-[#F7F2E8]">
                    Thank you for your submission
                  </h4>
                  <p className="mt-3 max-w-sm text-sm text-[#F7F2E8]/70">
                    Your details have been received by the selection committee.
                    We will be in touch within four weeks. From all of us at
                    ThoughtReadersClub, thank you for sharing your work.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-[#B8924A] hover:underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F2E8]/80"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full rounded-lg border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-3 text-sm text-[#F7F2E8] placeholder:text-[#F7F2E8]/40 focus:border-[#B8924A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F2E8]/80"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-3 text-sm text-[#F7F2E8] placeholder:text-[#F7F2E8]/40 focus:border-[#B8924A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="role"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F2E8]/80"
                      >
                        I am a
                      </label>
                      <select
                        id="role"
                        value={form.role}
                        onChange={(e) =>
                          setForm({ ...form, role: e.target.value })
                        }
                        className="w-full rounded-lg border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-3 text-sm text-[#F7F2E8] focus:border-[#B8924A] focus:outline-none"
                      >
                        <option>Author</option>
                        <option>Reader</option>
                        <option>Patron</option>
                        <option>Press</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="bookTitle"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F2E8]/80"
                      >
                        Book title (if applicable)
                      </label>
                      <input
                        id="bookTitle"
                        value={form.bookTitle}
                        onChange={(e) =>
                          setForm({ ...form, bookTitle: e.target.value })
                        }
                        placeholder="Title of your work"
                        className="w-full rounded-lg border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-3 text-sm text-[#F7F2E8] placeholder:text-[#F7F2E8]/40 focus:border-[#B8924A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="synopsis"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F2E8]/80"
                      >
                      Brief synopsis
                    </label>
                    <textarea
                      id="synopsis"
                      rows={3}
                      value={form.synopsis}
                      onChange={(e) =>
                        setForm({ ...form, synopsis: e.target.value })
                      }
                      placeholder="Two or three sentences about the work."
                      className="w-full rounded-lg border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-3 text-sm text-[#F7F2E8] placeholder:text-[#F7F2E8]/40 focus:border-[#B8924A] focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F2E8]/80"
                    >
                      Message to the committee
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us why your work belongs in the next residency cycle."
                      className="w-full rounded-lg border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-3 text-sm text-[#F7F2E8] placeholder:text-[#F7F2E8]/40 focus:border-[#B8924A] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B8924A] px-6 py-4 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#D4AF6E] hover:shadow-lg hover:shadow-[#B8924A]/30"
                  >
                    Submit for committee consideration
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-[#F7F2E8]/50">
                    We review every submission personally. Expect a reply within
                    four weeks.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
