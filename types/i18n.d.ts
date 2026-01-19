declare module "i18n" {
  type I18nCatalogValue = string | I18nCatalog | I18nCatalogValue[];
  interface I18nCatalog {
    [key: string]: I18nCatalogValue;
  }

  interface I18nConfigureOptions {
    locales: string[];
    defaultLocale?: string;
    staticCatalog?: Record<string, I18nCatalog>;
    objectNotation?: boolean | string;
    updateFiles?: boolean;
  }

  interface I18nApi {
    configure(options: I18nConfigureOptions): void;
    setLocale(locale: string): void;
    getCatalog(locale?: string): I18nCatalog;
  }

  const i18n: I18nApi;
  export default i18n;
}
