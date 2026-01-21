import type { Locale } from "../locales";
import { projects as projectsBr } from "./projectsList-br";
import { projects as projectsEn } from "./projectsList-en";

export const getProjectsByLocale = (locale: Locale) =>
  locale === "pt-BR" ? projectsBr : projectsEn;
