"use client";

import Image from "next/image";
import heroImg from "@/public/damola-oyeyemi.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const categories = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "SQL",
  "Tailwind CSS",
  "Framer Motion",
  "Data Analytics",
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-12 sm:px-8 lg:px-12">
      <section className="relative overflow-hidden rounded-[36px] border border-emerald-300 bg-white text-emerald-950 shadow-[0_40px_120px_-50px_rgba(15,107,59,0.35)]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e7f3ec] via-[#c0e2ce] to-[#58b27c]/40" />
          <div className="absolute inset-0 [mask-image:radial-gradient(1250px_720px_at_50%_-20%,white,transparent)]" />
        </div>

        <div className="relative z-10 flex flex-col gap-12 p-6 sm:p-10 lg:gap-16 lg:p-16">
          <header className="flex flex-wrap items-center justify-between gap-6 text-sm text-emerald-900/80">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-tight text-emerald-950 sm:text-lg">Damola Oyeyemi</span>
              <span className="hidden items-center gap-2 rounded-full border border-emerald-300 bg-white/80 px-4 py-1 uppercase tracking-[0.25em] text-emerald-800 sm:inline-flex">
                <span>Portfolio</span>
              </span>
            </div>
          </header>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,420px)] lg:items-center">
            <div className="max-w-xl space-y-10">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1 text-[0.7rem] text-emerald-800 shadow-[0_8px_30px_rgba(31,128,74,0.25)]">
                  Full-Stack Developer
                </span>
                <span className="hidden items-center gap-2 sm:inline-flex">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  <span className="text-emerald-900/80">Based in Lagos</span>
                </span>
              </div>
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                >
                  Crafting{" "}
                  <span className="bg-gradient-to-r from-[#8fdab1] via-[#4fb87e] to-[#1f8a4d] bg-clip-text text-transparent">
                    digital experiences
                  </span>{" "}
                  that feel personal, polished, and alive.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base text-emerald-900/85 sm:text-lg"
                >
                  I&apos;m <strong>Damola Oyeyemi</strong>, a full-stack engineer who loves pairing thoughtful strategy with elegant code. From calm dashboards to expressive marketing sites, I help teams tell their story with React, Next.js, TypeScript, and dependable Python backends. Every project is an invitation to craft something welcoming, inclusive, and delightfully fast.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-full bg-emerald-700 px-8 text-base font-medium text-white transition hover:bg-emerald-600"
                >
                  <Link href="mailto:hello@damolaoyeyemi.dev">Start a Conversation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 rounded-full border-emerald-400 bg-white/75 px-8 text-base font-medium text-emerald-800 backdrop-blur transition hover:bg-emerald-100 hover:text-emerald-950"
                >
                  <Link href="/projects">Browse Recent Wins</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative isolate overflow-hidden rounded-[32px] border border-emerald-300 bg-emerald-100/80 p-6 shadow-[0_45px_120px_-50px_rgba(15,107,59,0.35)]"
            >
              <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-300/35 blur-3xl" />
              <div className="absolute inset-0 rounded-[24px] border border-emerald-300/60 bg-gradient-to-br from-white/75 via-transparent to-emerald-200/50" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-emerald-800/90">
                  <span>Profile</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400 bg-emerald-100 px-3 py-1 text-[0.65rem] text-emerald-800">
                    Available
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-[24px] border border-emerald-300 bg-white/80">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.02 }}
                    transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImg}
                      alt="Portrait of Damola Oyeyemi in a white shirt against a light backdrop"
                      fill
                      priority
                      placeholder="blur"
                      quality={95}
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-[50%_32%]"
                    />
                  </motion.div>
                  <div className="relative pt-[120%]" />
                </div>
                <div className="flex flex-col gap-2 text-sm text-emerald-900/75">
                  <p className="text-emerald-950 font-medium">Damola Oyeyemi</p>
                  <p>Building inclusive, delightful digital products with heart.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4 text-sm text-emerald-900/75 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3 text-emerald-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 text-emerald-700">
                <Mail className="size-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.4em] text-emerald-900/60">Email</span>
                <span className="font-medium">hello@damolaoyeyemi.dev</span>
              </div>
            </div>
            <div className="hidden h-px flex-1 bg-emerald-300/70 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-emerald-900/60">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500/70" />
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300/60" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-800/80">
              Expertise
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="rounded-full border border-transparent bg-transparent px-4 py-0 text-sm font-medium text-emerald-900/70 transition hover:border-emerald-400 hover:bg-emerald-100 hover:text-emerald-950"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

