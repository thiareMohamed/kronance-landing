"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/providers/theme-provider";

type IntlThemeProviderProps = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
};

export function IntlThemeProvider({
  children,
  locale,
  messages,
}: IntlThemeProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
