"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  const t = useTranslations("hero");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.16),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 bg-kronance-grid bg-[size:48px_48px] opacity-25" />

      <Container className="pb-20 pt-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          {t("badge")}
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.02]"
              >
                {t("primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 font-medium text-foreground transition hover:border-primary/40"
              >
                {t("secondaryCta")}
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("statsTitle")}
            </p>
            <div className="mt-5 space-y-5">
              {stats.map((item) => (
                <div key={item.label} className="border-b border-border/70 pb-4 last:border-none last:pb-0">
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
