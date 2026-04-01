"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  const t = useTranslations("finalCta");

  return (
    <section id="final-cta" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-fuchsia-500/20 p-10 text-center shadow-[0_0_120px_-45px_rgba(56,189,248,0.8)]"
      >
        <Container className="max-w-6xl px-0">
          <h2 className="text-3xl font-semibold md:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
            {t("description")}
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
          >
            {t("button")}
          </Link>
        </Container>
      </motion.div>
    </section>
  );
}
