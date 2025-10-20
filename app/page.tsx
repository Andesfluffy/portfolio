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
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#080312] text-white shadow-2xl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/82 via-[#120d28]/75 to-[#1b0f2f]/55" />
          <div className="absolute inset-0 [mask-image:radial-gradient(1200px_620px_at_50%_-14%,black,transparent)]" />
        </div>

        <div className="relative z-10 grid gap-10 p-6 sm:p-10 lg:min-h-[60vh] lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-14 lg:p-14 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-16 xl:p-16">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 lg:col-span-2 lg:justify-between">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 uppercase tracking-[0.3em]">
              <span className="text-xs">Full‑Stack Developer</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,400px)] lg:items-stretch lg:gap-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,440px)] xl:gap-16">
            <div className="max-w-xl space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
              >
                Crafting <span className="bg-gradient-to-r from-[#c7a3ff] via-[#8f6bff] to-[#7dd3fc] bg-clip-text text-transparent">digital experiences</span>
                <br /> that feel personal, polished, and alive.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg text-white/80"
              >
                I&apos;m <strong>Damola Oyeyemi</strong>, a full‑stack engineer who loves pairing thoughtful strategy with elegant code.
                From calm dashboards to expressive marketing sites, I help teams tell their story with React, Next.js, TypeScript,
                and dependable Python backends. Every project is an invitation to craft something welcoming, inclusive, and delightfully fast.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  <Link href="mailto:hello@damolaoyeyemi.dev">
                    Start a Conversation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-base font-medium text-white backdrop-blur transition hover:bg-white/20 hover:text-white"
                >
                  <Link href="/projects">Browse Recent Wins</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[3/5] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_25px_70px_-25px_rgba(124,58,237,0.35)] sm:mx-auto sm:max-w-sm lg:mx-0 lg:h-full lg:max-w-none lg:aspect-auto lg:self-stretch"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary/15" />
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
                  sizes="(min-width: 1280px) 440px, (min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                  className="object-cover object-[50%_38%]"
                />
              </motion.div>
              <div className="absolute -right-12 bottom-12 hidden h-36 w-36 rounded-full bg-primary/40 blur-3xl sm:block" />
              <div className="absolute -top-10 left-10 h-20 w-20 rounded-full border border-white/20" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Mail className="size-5" />
              </div>
              <span className="font-medium">hello@damolaoyeyemi.dev</span>
            </div>
            <span
              className="hidden sm:block h-px flex-1 bg-white/20"
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em]">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/40" />
              <span className="inline-flex h-2 w-2 rounded-full bg-white/30" />
              <span className="inline-flex h-2 w-2 rounded-full bg-white/20" />
            </div>
          </motion.div>

        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
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
                className="rounded-full border border-transparent bg-transparent px-4 py-0 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:bg-white/10 hover:text-foreground"
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
