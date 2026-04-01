"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.22),_transparent_28%),linear-gradient(180deg,rgba(76,29,149,0.2),transparent_75%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <Container className="flex flex-col items-center pb-20 pt-24 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-slate-700 backdrop-blur-xl dark:text-slate-200"
        >
          <Sparkles className="h-4 w-4 text-cyan-400" />
          {t("badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-balance text-lg text-slate-600 dark:text-slate-300"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.02]"
          >
            {t("primaryCta")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#platform"
            className="inline-flex items-center rounded-2xl border border-slate-300/70 bg-white/60 px-6 py-3 font-medium text-slate-700 backdrop-blur-xl transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            {t("secondaryCta")}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
