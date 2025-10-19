export const metadata = {
  title: "About — Damola Oyeyemi",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground max-w-2xl">
          I’m <strong>Damola Oyeyemi</strong>, a full‑stack software developer. I build
          fast, accessible applications with <strong>React</strong>, <strong>Next.js</strong>,
          <strong> TypeScript</strong>, and <strong>Tailwind CSS</strong>, and deliver
          reliable backends with <strong>Python</strong> and <strong>SQL</strong>.
          I love clean architecture, great developer experience, and elegant micro‑interactions.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Core Stack</h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <li>React, Next.js (App Router)</li>
          <li>TypeScript, Node.js</li>
          <li>Tailwind CSS, shadcn/ui</li>
          <li>Framer Motion</li>
          <li>Python (FastAPI / Flask)</li>
          <li>SQL (PostgreSQL, SQLite)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Principles</h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Mobile‑first, accessible, and responsive by default</li>
          <li>Performance budgets and pragmatic optimizations</li>
          <li>Readable, type‑safe APIs and clean structure</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What I Build</h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <li>SaaS platforms and internal tools</li>
          <li>Data dashboards and analytics workflows</li>
          <li>Marketing websites with premium motion</li>
          <li>Headless commerce and subscriptions</li>
          <li>Design systems and component libraries</li>
          <li>API integrations and automation</li>
        </ul>
      </section>
    </div>
  );
}
