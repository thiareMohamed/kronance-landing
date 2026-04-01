"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/contact-form";
import { SectionWrapper } from "@/components/section-wrapper";

const infoIcons = [Mail, Phone, MapPin];

export function ContactSection() {
  const t = useTranslations("contact");
  const info = t.raw("info") as Array<{ label: string; value: string }>;

  return (
    <SectionWrapper
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
      className="py-18"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 rounded-2xl border border-border/70 bg-card/60 p-6">
          {info.map((item, index) => {
            const Icon = infoIcons[index] ?? Mail;
            return (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background">
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
