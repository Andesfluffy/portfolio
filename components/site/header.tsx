"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const nav = [
  {
    href: "/",
    label: "Home",
    isActive: (path: string) => path === "/",
  },
  {
    href: "/projects",
    label: "Projects",
    isActive: (path: string) => path.startsWith("/projects"),
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    if (!pathname) return undefined;
    return nav.find((item) => item.isActive(pathname))?.href;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-300/60 bg-emerald-50/80 backdrop-blur supports-[backdrop-filter]:bg-emerald-50/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.02, rotate: -0.3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-[radial-gradient(circle,_#2ea161,_transparent_60%)]" />
            <span className="bg-gradient-to-r from-[#0f6b3b] via-[#1f9f5c] to-[#56c586] bg-clip-text text-transparent">
              Damola Oyeyemi
            </span>
          </Link>
        </motion.div>

        <nav className="relative hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-0.5 py-2 text-sm transition-colors",
                  isActive ? "text-emerald-950" : "text-emerald-900/60 hover:text-emerald-950"
                )}
              >
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[linear-gradient(90deg,_#0f6b3b_0%,_#56c586_100%)]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" className="rounded-full border border-emerald-400 bg-emerald-50/80 px-4 text-xs uppercase tracking-[0.25em] text-emerald-800 transition hover:border-emerald-500 hover:bg-emerald-100 hover:text-emerald-950">
            <Link href="mailto:hello@damolaoyeyemi.dev">Let&apos;s talk</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="rounded-full border border-emerald-400 bg-emerald-100 text-emerald-800 transition hover:bg-emerald-200"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4 pt-8">
                {nav.map((item) => {
                  const isActive = activeHref === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "text-lg font-medium transition",
                        isActive ? "text-emerald-950" : "text-emerald-800/80 hover:text-emerald-950"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <SheetFooter>
                <Button asChild className="w-full rounded-full text-base">
                  <Link href="mailto:hello@damolaoyeyemi.dev" onClick={() => setOpen(false)}>
                    Let&apos;s talk
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
