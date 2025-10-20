export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    description: "Collaborative kanban for teams with real-time updates, insights, and AI summaries.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    image: "https://picsum.photos/id/1015/1200/630",
    url: "#",
    repo: "#",
  },
  {
    slug: "shoppeak",
    title: "ShopPeak",
    description: "Headless commerce template with Stripe, server actions, and shadcn/ui.",
    tags: ["Next.js", "Stripe", "Tailwind", "shadcn/ui"],
    image: "https://picsum.photos/id/1050/1200/630",
    url: "#",
    repo: "#",
  },
  {
    slug: "devnotes",
    title: "DevNotes",
    description: "Markdown knowledge base with offline support and cross-device sync.",
    tags: ["Next.js", "PWA", "IndexedDB", "Python API"],
    image: "https://picsum.photos/id/1027/1200/630",
    url: "#",
    repo: "#",
  },
];

