import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-foreground">
            LinkedIn
          </Link>
          <Link href="mailto:you@example.com" className="hover:text-foreground">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

