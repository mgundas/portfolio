import en from "./en";
import tr from "./tr";
import type { Content } from "./types";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

const dictionaries: Record<Locale, Content> = { en, tr };

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const getContent = (locale: Locale): Content => dictionaries[locale];

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "tr" : "en");

export type { Content };
