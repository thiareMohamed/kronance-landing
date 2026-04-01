"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/section-wrapper";

type Project = {
  title: string;
  sector: string;
  description: string;
  impact: string;
};

const ids = ["one", "two", "three"] as const;

export function ProjectsSection() {
  const t = useTranslations("projects");
  const projects = ids.map((id) => ({
    title: t(`items.${id}.title`),
    sector: t(`items.${id}.sector`),
    description: t(`items.${id}.description`),
    impact: t(`items.${id}.impact`),
  })) as Project[];

  return (
    <SectionWrapper
      id="projects"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      className="py-20"
    >
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="rounded-2xl border border-border/70 bg-card/70 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
              {project.sector}
            </p>
            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-4 text-sm font-medium text-foreground">{project.impact}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
