import "server-only";
import i18n from "i18n";
import { cookies, headers } from "next/headers";
import { defaultLocale, supportedLocales, type Locale } from "./locales";
import { translations } from "./translations";

const resolveLocale = (acceptLanguage?: string | null): Locale => {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const entries = acceptLanguage.toLowerCase().split(",");
  for (const entry of entries) {
    const language = entry.split(";")[0]?.trim();
    if (!language) {
      continue;
    }

    if (language.startsWith("pt")) {
      return "pt-BR";
    }

    if (language.startsWith("en")) {
      return "en-US";
    }
  }

  return defaultLocale;
};

export function getLocale() {
  const cookieLocale = cookies().get("locale")?.value;
  if (cookieLocale && supportedLocales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  return resolveLocale(headers().get("accept-language"));
}

i18n.configure({
  locales: [...supportedLocales],
  defaultLocale,
  staticCatalog: {
    "pt-BR": translations.br,
    "en-US": translations.en,
  },
  objectNotation: true,
  updateFiles: false,
});

export function getTranslations(locale: Locale = getLocale()) {
  i18n.setLocale(locale);
  return i18n.getCatalog(locale) as typeof translations.en;
}
