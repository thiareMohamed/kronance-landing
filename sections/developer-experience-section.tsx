"use client";

import { motion } from "framer-motion";
import { BookOpenCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { CodeBlock } from "@/components/code-block";
import { Container } from "@/components/ui/container";

export function DeveloperExperienceSection() {
  const t = useTranslations("developerExperience");

  return (
    <section id="developer-experience" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <CodeBlock
            title={t("apiTitle")}
            language={t("apiLanguage")}
            code={`curl -X POST https://api.kronance.dev/v1/pipelines \\
  -H "Authorization: Bearer KRONANCE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "project":"global-app",
    "env":"production",
    "checks":["security-scan","integration-tests"]
  }'`}
          />

          <CodeBlock
            title={t("deployTitle")}
            language={t("deployLanguage")}
            code={`workspace: global-app
region: eu-west
pipeline:
  build: npm run build
  test: npm run test
  deploy:
    strategy: blue-green
    approvals: required
security:
  secrets: managed
  compliance: soc2-ready`}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href="#"
            aria-label={t("readDocs")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-cyan-400/40 hover:text-cyan-500"
          >
            <BookOpenCheck className="h-4 w-4" />
            {t("readDocs")}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
