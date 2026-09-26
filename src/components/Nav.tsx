"use client";
import { useEffect, useState } from "react";
import { profile, sectionIds } from "@/data/profile";
import type { Content, Locale } from "@/content";
import { openCommandMenu } from "./CommandMenu";
import { Menu } from "./icons";
import LanguageSwitch from "./LanguageSwitch";

const Nav = ({ locale, t }: { locale: Locale; t: Content["nav"] }) => {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [modKey, setModKey] = useState("Ctrl");

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setModKey("⌘");

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`fade-up flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border py-1.5 pl-1.5 pr-1.5 transition-all duration-500 [animation-delay:1.1s] ${
          scrolled ? "border-line bg-ink/85 shadow-2xl shadow-black/40 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          aria-label={t.backToTop}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-fg font-serif text-lg italic text-ink transition-transform hover:rotate-[-8deg]"
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === id && <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]" />}
                {t.sections[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={t.switchLanguage} />
          <button
            onClick={openCommandMenu}
            className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface/60 px-4 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg"
            aria-label={t.openMenu}
          >
            <Menu className="md:hidden" />
            <span className="md:hidden">{t.menu}</span>
            <kbd className="hidden font-mono text-xs md:inline">{modKey} K</kbd>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
