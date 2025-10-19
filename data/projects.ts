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
    description: "Collaborative kanban for teams with real-time updates and AI summaries.",
    tags: ["Next.js", "Postgres", "WebSockets", "AI"],
    image: "https://picsum.photos/id/1015/1200/630",
    url: "#",
    repo: "#",
  },
  {
    slug: "shoppeak",
    title: "ShopPeak",
    description: "Headless e-commerce starter with Stripe, hooks, and modern UI.",
    tags: ["Next.js", "Stripe", "Tailwind", "shadcn/ui"],
    image: "https://picsum.photos/id/1050/1200/630",
    url: "#",
    repo: "#",
  },
  {
    slug: "devnotes",
    title: "DevNotes",
    description: "Markdown note-taking with offline support and cross-device sync.",
    tags: ["PWA", "IndexedDB", "Next.js"],
    image: "https://picsum.photos/id/1027/1200/630",
    url: "#",
    repo: "#",
  },
];

