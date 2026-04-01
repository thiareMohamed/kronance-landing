"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

const logos = [
  "NovaCloud",
  "ByteForge",
  "OrbitStack",
  "ScaleGrid",
  "CipherOps",
  "AtlasRuntime",
];

export function TrustSection() {
  const t = useTranslations("trust");
  const stats = t.raw("stats") as Array<{ label: string; value: string }>;

  return (
    <section className="-mt-8 py-14 md:-mt-10 md:py-16">
      <Container>
        <div className="rounded-3xl border border-border/70 bg-card/75 p-6 shadow-[0_30px_100px_-55px_rgba(8,145,178,0.65)] backdrop-blur-xl md:p-8">
          <p className="text-center text-sm text-muted-foreground">{t("title")}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-border/70 bg-background/70 p-4 text-center"
              >
                <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-border/70 bg-background/50 px-4 py-3 text-center text-sm text-foreground/80"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
