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

  return (
    <section className="py-16">
      <Container>
      <p className="text-center text-sm text-muted-foreground">{t("title")}</p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((logo, index) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-foreground/80 backdrop-blur"
          >
            {logo}
          </motion.div>
        ))}
      </div>
      </Container>
    </section>
  );
}
