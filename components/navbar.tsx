"use client";

import { motion } from "framer-motion";
import { Command, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const t = useTranslations("navbar");
  const navItems = [
    { href: "#platform", label: t("platform") },
    { href: "#security", label: t("security") },
    { href: "#pricing", label: t("pricing") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card text-primary transition-colors group-hover:text-cyan-400">
            <Command className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-lg font-semibold tracking-tight">Kronance</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#final-cta"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:shadow-[0_0_32px_rgba(34,211,238,0.45)]"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {t("cta")}
          </motion.a>
        </div>
      </Container>
    </header>
  );
}
