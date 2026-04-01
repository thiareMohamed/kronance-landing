"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

const items = [
  { icon: BrainCircuit, key: "automation" },
  { icon: Bot, key: "generation" },
  { icon: ShieldCheck, key: "analysis" },
] as const;

export function AISection() {
  const t = useTranslations("ai");

  return (
    <section id="ai" className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-slate-900/80 to-cyan-500/20 p-8 backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.2),transparent_40%)]" />

          <div className="relative space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {t("eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                {t("title")}
              </h2>
              <p className="max-w-2xl text-slate-200">{t("description")}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {items.map(({ icon: Icon, key }, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: idx * 0.08 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5"
                >
                  <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                  <h3 className="text-base font-semibold text-white">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {t(`items.${key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
