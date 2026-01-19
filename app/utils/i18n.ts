import "server-only";
import i18n from "i18n";
import { translations } from "./translations";

const locale = "pt-BR";

i18n.configure({
  locales: [locale],
  defaultLocale: locale,
  staticCatalog: {
    [locale]: translations.br,
  },
  objectNotation: true,
  updateFiles: false,
});

export function getTranslations() {
  i18n.setLocale(locale);
  return i18n.getCatalog(locale) as typeof translations.br;
}
