"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, LockKeyhole } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

const securityIcons = [ShieldCheck, LockKeyhole, BadgeCheck];

export function SecuritySection() {
  const t = useTranslations("security");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section id="security" className="py-12 md:py-16">
      <Container className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-8 backdrop-blur-xl md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(125,211,252,0.2),transparent_50%)]" />
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t("subtitle")}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = securityIcons[index] ?? ShieldCheck;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.08 * index, duration: 0.35 }}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 dark:bg-white/5"
              >
                <Icon className="h-5 w-5 text-cyan-300" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
