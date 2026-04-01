"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<(typeof routing.locales)[number], string> = {
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher() {
  const locale = useLocale() as (typeof routing.locales)[number];
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-2 py-1 shadow-sm">
      <Languages className="h-4 w-4 text-primary" aria-hidden />
      <label htmlFor="language-switcher" className="sr-only">
        Select language
      </label>
      <select
        id="language-switcher"
        aria-label="Language switcher"
        className="bg-transparent text-sm font-medium text-foreground outline-none"
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value as (typeof routing.locales)[number];
          router.replace(pathname, { locale: nextLocale });
        }}
      >
        {routing.locales.map((availableLocale) => (
          <option key={availableLocale} value={availableLocale}>
            {LABELS[availableLocale]}
          </option>
        ))}
      </select>
    </div>
  );
}
