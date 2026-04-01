"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

const footerLinks = [
  { key: "product", href: "/services" },
  { key: "docs", href: "/projects" },
  { key: "security", href: "/security" },
  { key: "company", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">
        <div className="max-w-sm space-y-4">
          <p className="text-xl font-semibold text-foreground">Kronance</p>
          <p className="text-sm text-muted-foreground">{t("description")}</p>
        </div>
        <nav
          aria-label={t("navigationAria")}
          className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-5"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-primary"
            >
              {t(`links.${item.key}`)}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/60 px-6 py-4 text-center text-xs text-muted-foreground">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
