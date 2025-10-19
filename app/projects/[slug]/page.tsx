import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} | Projects`;
  const description = project.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: project.image ? [{ url: project.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground max-w-2xl">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {project.url && (
            <Button asChild>
              <Link href={project.url} target="_blank" rel="noreferrer">Live Demo</Link>
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline">
              <Link href={project.repo} target="_blank" rel="noreferrer">Source</Link>
            </Button>
          )}
        </div>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          This project showcases a modern web app setup with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
          It focuses on performance, accessibility, and clean design.
        </p>
        <ul>
          <li>Responsive UI and accessible components</li>
          <li>Clean, type-safe code structure</li>
          <li>Animations with Framer Motion where it adds value</li>
        </ul>
      </div>
    </div>
  );
}
