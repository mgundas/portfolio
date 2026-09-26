"use client";
import { useEffect, useState } from "react";
import { profile, sections } from "@/data/profile";
import { openCommandMenu } from "./CommandMenu";
import { Menu } from "./icons";

const Nav = () => {
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
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
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
          aria-label="Back to top"
          className="grid size-10 place-items-center rounded-full bg-fg font-serif text-lg italic text-ink transition-transform hover:rotate-[-8deg]"
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === s.id && <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]" />}
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={openCommandMenu}
          className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface/60 px-4 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg"
          aria-label="Open command menu"
        >
          <Menu className="md:hidden" />
          <span className="md:hidden">Menu</span>
          <kbd className="hidden font-mono text-xs md:inline">{modKey} K</kbd>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
