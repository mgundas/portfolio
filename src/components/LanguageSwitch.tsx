"use client";
import { LOCALE_COOKIE, locales, type Locale } from "@/content";

/** Remembers the visitor's choice so `/` sends them back to the same language next time. */
export const saveLocale = (locale: Locale) => {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
};

/** Keeps the current section anchor when hopping between /en and /tr. */
export const switchLocale = (locale: Locale) => {
  saveLocale(locale);
  window.location.href = `/${locale}${window.location.hash}`;
};

const LanguageSwitch = ({ locale, label }: { locale: Locale; label: string }) => (
  <div role="group" aria-label={label} className="flex h-10 items-center rounded-full border border-line bg-surface/60 p-1 font-mono text-xs">
    {locales.map((l) => (
      <button
        key={l}
        onClick={() => l !== locale && switchLocale(l)}
        aria-current={l === locale ? "true" : undefined}
        lang={l}
        className={`h-full cursor-pointer rounded-full px-2.5 uppercase transition-colors ${
          l === locale ? "bg-fg text-ink" : "text-muted hover:text-fg"
        }`}
      >
        {l}
      </button>
    ))}
  </div>
);

export default LanguageSwitch;
