"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/55">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.02, rotate: -0.3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Link href="/" className="font-semibold tracking-tight inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[radial-gradient(circle,_#B59CFF,_transparent_60%)]" />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,_#B59CFF_0%,_#7DD3FC_60%,_#5EEAD4_100%)]">
              Damola Oyeyemi
            </span>
          </Link>
        </motion.div>

        <nav className="relative hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm transition-colors px-0.5 py-2",
                  active ? "text-white" : "text-white/60 hover:text-white/80"
                )}
              >
                <span className="relative">
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[linear-gradient(90deg,_#B59CFF_0%,_#7DD3FC_100%)]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-base",
                    pathname === item.href ? "text-white" : "text-white/70"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
