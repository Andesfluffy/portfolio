export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  highlights: string[];
  tags: string[];
  image: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "aurora-workspace",
    title: "Aurora Workspace",
    description:
      "Personal information manager that unifies notes, contacts, and task planning in a single, real-time workspace.",
    overview:
      "Aurora Workspace is a calm command centre for busy professionals. I designed the experience to keep notebooks, relationship tracking, and actionable tasks perfectly in sync across devices while maintaining a polished, brand-forward landing page.",
    highlights: [
      "Responsive marketing site built with Next.js App Router, Framer Motion micro-interactions, and layered glassmorphism aesthetics inspired by calm productivity brands.",
      "Supabase-backed workspace that keeps notes, contact records, and tasks synchronised with row-level security and optimistic UI updates.",
      "Google sign-in, shared labels, and reminder flows that help people stay organised without sacrificing privacy or ease-of-use.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1600&q=80",
    url: "https://auroraworkspace.vercel.app/",
    repo: "https://github.com/Andesfluffy/PIM-APP",
  },
  {
    slug: "helix-pay",
    title: "HelixPay",
    description:
      "Revenue analytics for subscription businesses with real-time MRR tracking, cohort analysis, and churn automation.",
    overview:
      "HelixPay gives founders a single pane of glass for understanding subscription performance. I designed the system around streaming Stripe webhooks into a Postgres + ClickHouse warehouse, then exposed curated metrics through a Next.js dashboard backed by tRPC APIs and server actions.",
    highlights: [
      "Multi-tenant architecture with row-level security enforced through Drizzle ORM and PostgreSQL policies.",
      "Near real-time ingestion pipeline built with Upstash QStash workers and cron-triggered background jobs.",
      "Interactive revenue explorer using TanStack Table and Charts to drill into cohorts, plans, and retention.",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "ClickHouse", "Stripe", "tRPC"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    url: "https://helixpay.app",
    repo: "https://github.com/damolaoyeyemi/helixpay",
  },
  {
    slug: "market-sentinel",
    title: "Market Sentinel",
    description:
      "AI-assisted competitive intelligence: monitor rivals, track feature launches, and deliver weekly briefs to stakeholders.",
    overview:
      "Market Sentinel keeps product and marketing teams aligned on shifting landscapes. The platform ingests changelogs, press releases, and roadmap feeds, enriches them with OpenAI embeddings, and surfaces the most relevant updates in a collaborative inbox and automated summaries.",
    highlights: [
      "Serverless scraping workers orchestrated with AWS Lambda and SQS feeding a shared Supabase warehouse.",
      "Retrieval-augmented briefings combining Pinecone vector search with custom prompt templates for different personas.",
      "Role-based workspaces, shared annotations, and granular notification settings built with NextAuth and Resend.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Supabase", "OpenAI", "NextAuth", "Resend"],
    image: "https://images.unsplash.com/photo-1520607162513-0d761b86b7bf?auto=format&fit=crop&w=1600&q=80",
    url: "https://marketsentinel.io",
    repo: "https://github.com/damolaoyeyemi/market-sentinel",
  },
  {
    slug: "supper-club",
    title: "Supper Club",
    description:
      "Community marketplace for culinary pop-ups with automated booking flows, vendor dashboards, and waitlist management.",
    overview:
      "Supper Club connects home chefs with local food lovers. I built the entire stack—from the event discovery experience to vendor tooling and payouts—optimizing for trust, smooth transactions, and SEO-friendly performance.",
    highlights: [
      "Composable commerce layer using MedusaJS, PostgreSQL, and custom webhooks for payout reconciliation.",
      "Dynamic venue pages statically generated with ISR, Algolia-powered search, and image optimization for rich media.",
      "Chef dashboard with booking calendar integrations, SMS reminders via Twilio, and revenue insights.",
    ],
    tags: ["Next.js", "Medusa", "PostgreSQL", "Algolia", "Twilio", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1530543787849-128d94430c6b?auto=format&fit=crop&w=1600&q=80",
    url: "https://supperclub.app",
    repo: "https://github.com/damolaoyeyemi/supper-club",
  },
];

