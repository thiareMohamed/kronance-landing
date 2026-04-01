"use client";

import { AppWindow, CloudCog, Cpu, LockKeyhole, Server, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { ServiceCard } from "@/components/service-card";
import { SectionWrapper } from "@/components/section-wrapper";

const icons = [AppWindow, CloudCog, ShieldCheck, Cpu, Server, LockKeyhole];

export function ServicesSection() {
  const t = useTranslations("services");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <SectionWrapper id="services" eyebrow={t("eyebrow")} title={t("title")} description={t("description")}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index] ?? AppWindow;
          return (
            <ServiceCard
              key={item.title}
              icon={Icon}
              title={item.title}
              description={item.description}
              delay={index * 0.04}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
