"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight"
        >
          Building delightful web apps with precision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-muted-foreground"
        >
          I craft performant, accessible, and beautiful experiences using Next.js, TypeScript, Tailwind, and shadcn/ui.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:you@example.com">Get in Touch</Link>
          </Button>
        </motion.div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Featured Projects</h2>
          <Button variant="ghost" asChild className="text-sm">
            <Link href="/projects">See all</Link>
          </Button>
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

