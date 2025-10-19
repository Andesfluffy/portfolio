import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05010d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Damola Oyeyemi. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="transition hover:text-white">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="transition hover:text-white">
            LinkedIn
          </Link>
          <Link href="mailto:hello@damolaoyeyemi.dev" className="transition hover:text-white">
            Email Me
          </Link>
        </div>
      </div>
    </footer>
  );
}
