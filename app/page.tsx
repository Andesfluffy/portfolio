"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const categories = ["All", "Web Apps", "Marketing Sites", "Design Systems", "Dashboards"];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950 text-white shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593030668930-262c95e78410?q=80&w=2000&auto=format&fit=crop"
            alt="Portrait of a designer in a white shirt against a light backdrop"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-neutral-950/85 to-neutral-900/55" />
        </div>

        <div className="relative z-10 flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-14 xl:p-16 min-h-[520px]">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 uppercase tracking-[0.3em]">
              <span className="text-xs">Product Engineer</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous showcase"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:border-white/40 hover:bg-white/15"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next showcase"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#f2643c] text-white transition hover:bg-[#f2643c]/90"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#f2643c]" />
              <span>Studio</span>
            </div>
          </div>

          <div className="max-w-xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
            >
              Building <span className="text-[#f2643c]">web apps</span> <br />
              and bold marketing sites
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/70"
            >
              I&apos;m Jackson Turner, a full-stack product engineer crafting polished SaaS platforms, marketing sites, and
              internal dashboards that scale with your team.
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
                className="h-12 rounded-full bg-[#f2643c] px-8 text-base font-medium text-white transition hover:bg-[#f2643c]/90"
              >
                <Link href="mailto:hello@jacksonbuilds.com">Start a Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-base font-medium text-white backdrop-blur transition hover:bg-white/20 hover:text-white"
              >
                <Link href="/projects">See Case Studies</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2643c]/10 text-[#f2643c]">
                <Mail className="size-5" />
              </div>
              <span className="font-medium">hello@jacksonbuilds.com</span>
            </div>
            <span className="hidden sm:block h-px flex-1 bg-white/20" aria-hidden="true" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Core services</p>
            <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
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

