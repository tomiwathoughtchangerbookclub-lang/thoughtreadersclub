"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
  Clock,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const benefits = [
  {
    icon: Clock,
    title: "Twelve month residency",
    description:
      "Selected books receive a full year of structured engagement, not a one time announcement.",
  },
  {
    icon: Users,
    title: "21,000+ engaged readers",
    description:
      "Your work reaches a global community of serious readers who treat each book as a long conversation.",
  },
  {
    icon: Award,
    title: "Permanent recognition",
    description:
      "Reviews and discussions stay visible and compound long after the residency cycle closes.",
  },
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Author",
    bookTitle: "",
    genre: "Literary Fiction",
    publisher: "",
    pageCount: "",
    synopsis: "",
    why: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E8]">
      <SiteHeader solid />

      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#1A2F26] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F26] via-[#1A2F26] to-[#2D4538]" />
        <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[#B8924A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[#F7F2E8]/60 transition-colors hover:text-[#B8924A]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                Application for the 2026 Residency
              </span>
            </div>
            <h1 className="font-serif-display text-4xl font-bold leading-tight text-[#F7F2E8] sm:text-5xl md:text-6xl text-balance">
              Submit your work for committee consideration
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F7F2E8]/75 md:text-lg">
              We accept fifteen standout authors per annual cycle. Every
              submission is read in full by Dr. Tomiwa Johnson personally. Fill
              out the form below with as much detail as you can. The more we
              understand about your work, the better we can consider it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form and sidebar */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl rounded-2xl border border-[#E5DCC4] bg-white p-12 text-center shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A2F26]">
                <CheckCircle2 className="h-10 w-10 text-[#B8924A]" />
              </div>
              <h2 className="mt-6 font-serif-display text-3xl font-bold text-[#1A2F26]">
                Thank you for your submission
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#5C6B5F]">
                Your application for the 2026 residency cycle has been received.
                Dr. Tomiwa Johnson will read your submission in full and respond
                personally within four weeks. From all of us at
                ThoughtReadersClub, thank you for sharing your work.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      role: "Author",
                      bookTitle: "",
                      genre: "Literary Fiction",
                      publisher: "",
                      pageCount: "",
                      synopsis: "",
                      why: "",
                      message: "",
                    });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8924A] px-6 py-3 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#D4AF6E]"
                >
                  Submit another response
                </button>
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A2F26] px-6 py-3 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#1A2F26] hover:text-[#F7F2E8]"
                >
                  Browse the reading shelf
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
              {/* Sidebar with benefits */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <div className="rounded-2xl bg-[#1A2F26] p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B8924A]/15 text-[#B8924A]">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif-display text-2xl font-bold text-[#F7F2E8]">
                    What selected authors receive
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F7F2E8]/65">
                    The residency is a structured year long program, not a one
                    time selection. Here is what happens when your book is
                    chosen.
                  </p>

                  <div className="mt-8 flex flex-col gap-6">
                    {benefits.map((b) => (
                      <div key={b.title} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#B8924A]/15 text-[#B8924A]">
                          <b.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-serif-display text-base font-semibold text-[#F7F2E8]">
                            {b.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-[#F7F2E8]/65">
                            {b.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#E5DCC4] bg-white p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
                    Response time
                  </div>
                  <div className="mt-2 font-serif-display text-2xl font-bold text-[#1A2F26]">
                    Within 4 weeks
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6B5F]">
                    Every submission is read in full by Dr. Tomiwa Johnson. You
                    will receive a personal reply, whether or not your book is
                    selected.
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl border border-[#E5DCC4] bg-white p-8 md:p-10"
              >
                <h2 className="font-serif-display text-2xl font-bold text-[#1A2F26] md:text-3xl">
                  Application details
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5C6B5F]">
                  All fields marked with an asterisk are required. Take your
                  time with the synopsis and the statement. These two fields
                  carry the most weight in our initial review.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-6">
                  {/* Name and email */}
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
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
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
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                      />
                    </div>
                  </div>

                  {/* Role and genre */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="role"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                      >
                        I am a *
                      </label>
                      <select
                        id="role"
                        value={form.role}
                        onChange={(e) =>
                          setForm({ ...form, role: e.target.value })
                        }
                        className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                      >
                        <option>Author</option>
                        <option>Reader</option>
                        <option>Patron</option>
                        <option>Press</option>
                      </select>
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
                        onChange={(e) =>
                          setForm({ ...form, genre: e.target.value })
                        }
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

                  {/* Book title and publisher */}
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
                        onChange={(e) =>
                          setForm({ ...form, bookTitle: e.target.value })
                        }
                        placeholder="Title of your work"
                        className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="publisher"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                      >
                        Publisher (if any)
                      </label>
                      <input
                        id="publisher"
                        value={form.publisher}
                        onChange={(e) =>
                          setForm({ ...form, publisher: e.target.value })
                        }
                        placeholder="Independent or self published"
                        className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                      />
                    </div>
                  </div>

                  {/* Page count */}
                  <div>
                    <label
                      htmlFor="pageCount"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A2F26]"
                    >
                      Approximate page count
                    </label>
                    <input
                      id="pageCount"
                      type="number"
                      value={form.pageCount}
                      onChange={(e) =>
                        setForm({ ...form, pageCount: e.target.value })
                      }
                      placeholder="e.g. 320"
                      className="w-full max-w-xs rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20"
                    />
                  </div>

                  {/* Synopsis */}
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
                      onChange={(e) =>
                        setForm({ ...form, synopsis: e.target.value })
                      }
                      placeholder="Three to five sentences describing what your book is about. Focus on the central question or conflict."
                      className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20 resize-none"
                    />
                  </div>

                  {/* Why this book */}
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
                      onChange={(e) =>
                        setForm({ ...form, why: e.target.value })
                      }
                      placeholder="Tell us why your work aligns with our mission of uncovering meaningful books in overlooked places. What makes this book worth a year long conversation?"
                      className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20 resize-none"
                    />
                  </div>

                  {/* Additional message */}
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
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Awards, previous works, or anything else relevant to your submission."
                      className="w-full rounded-lg border border-[#E5DCC4] bg-[#F7F2E8]/50 px-4 py-3 text-sm text-[#1A2F26] placeholder:text-[#5C6B5F]/50 focus:border-[#B8924A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8924A]/20 resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-[#5C6B5F]">
                      We review every submission personally. Expect a reply
                      within four weeks.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A2F26] px-8 py-4 text-sm font-semibold text-[#F7F2E8] transition-all hover:bg-[#2D4538] hover:shadow-lg"
                    >
                      Submit application
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
