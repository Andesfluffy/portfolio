export const metadata = {
  title: "About | Portfolio",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground max-w-2xl">
          I’m a web engineer focused on building clean, fast, and accessible products.
          I enjoy strong type-safety, good DX, and thoughtful UI motion.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Stack</h2>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <li>Next.js (App Router)</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>shadcn/ui</li>
          <li>Framer Motion</li>
          <li>Node + Edge runtimes</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Principles</h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          <li>Accessibility-first and responsive by default</li>
          <li>Performance budgets and pragmatic optimizations</li>
          <li>Minimal, expressive APIs and clean structure</li>
        </ul>
      </section>
    </div>
  );
}

