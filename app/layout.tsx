import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { cn } from "@/lib/utils";
import { Aurora } from "@/components/decoration/aurora";
import { Noise } from "@/components/decoration/noise";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Web Apps",
  description: "Modern portfolio showcasing web applications, built with Next.js, Tailwind, shadcn/ui, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background text-foreground antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Aurora />
          <Noise />
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
