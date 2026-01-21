export const supportedLocales = ["pt-BR", "en-US"] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en-US";
