"use client";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { profile, sectionIds, socials } from "@/data/profile";
import { otherLocale, type Content, type Locale } from "@/content";
import { ArrowUpRight, Copy, FileText, GitHub, Globe, Hash, LinkedIn, Mail, Search } from "./icons";
import { switchLocale } from "./LanguageSwitch";

export const OPEN_COMMAND_MENU = "command-menu:open";

export const openCommandMenu = () => window.dispatchEvent(new Event(OPEN_COMMAND_MENU));

type Command = {
  group: string;
  label: string;
  icon: ReactNode;
  hint?: string;
  run: () => void;
};

type Props = { locale: Locale; t: Content["command"]; sections: Content["nav"]["sections"] };

const CommandMenu = ({ locale, t, sections }: Props) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands = useMemo<Command[]>(
    () => [
      ...sectionIds.map((id) => ({
        group: t.groups.navigate,
        label: sections[id],
        icon: <Hash />,
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        group: t.groups.actions,
        label: t.copyEmail,
        icon: <Copy />,
        hint: profile.email,
        run: () => {
          navigator.clipboard.writeText(profile.email).then(() => {
            setToast(t.copied);
            setTimeout(() => setToast(null), 2200);
          });
        },
      },
      {
        group: t.groups.actions,
        label: t.sendEmail,
        icon: <Mail />,
        run: () => (window.location.href = socials.email),
      },
      {
        group: t.groups.actions,
        label: t.openResume,
        icon: <FileText />,
        hint: "PDF",
        run: () => window.open(profile.resume, "_blank"),
      },
      {
        group: t.groups.language,
        label: t.switchTo,
        icon: <Globe />,
        hint: `${locale.toUpperCase()} → ${otherLocale(locale).toUpperCase()}`,
        run: () => switchLocale(otherLocale(locale)),
      },
      {
        group: t.groups.elsewhere,
        label: "GitHub",
        icon: <GitHub />,
        hint: "@mgundas",
        run: () => window.open(socials.github, "_blank"),
      },
      {
        group: t.groups.elsewhere,
        label: "LinkedIn",
        icon: <LinkedIn />,
        hint: "mehmet-gundas",
        run: () => window.open(socials.linkedin, "_blank"),
      },
    ],
    [locale, t, sections],
  );

  const filtered = useMemo(() => {
    // Locale-aware lowercasing so Turkish İ/I match i/ı correctly.
    const q = query.trim().toLocaleLowerCase(locale);
    if (!q) return commands;
    return commands.filter((c) => `${c.group} ${c.label} ${c.hint ?? ""}`.toLocaleLowerCase(locale).includes(q));
  }, [commands, query, locale]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_MENU, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const execute = (cmd: Command) => {
    close();
    // Let the dialog unmount (and scroll lock lift) before running navigation.
    requestAnimationFrame(cmd.run);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter" && filtered[active]) {
      e.preventDefault();
      execute(filtered[active]);
    } else if (e.key === "Escape") {
      close();
    }
  };

  let lastGroup = "";

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[14vh]" role="dialog" aria-modal aria-label={t.placeholder}>
          <div className="fade-up absolute inset-0 bg-black/60 backdrop-blur-sm [animation-duration:.25s]" onClick={close} />
          <div className="fade-up relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-2xl shadow-black/60 [animation-duration:.3s]">
            <div className="flex items-center gap-3 border-b border-line px-5">
              <Search className="shrink-0 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKey}
                placeholder={t.placeholder}
                className="h-14 w-full bg-transparent text-[15px] outline-none placeholder:text-dim"
              />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>
            <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">{t.noResults} “{query}”</li>}
              {filtered.map((cmd, i) => {
                const header = cmd.group !== lastGroup ? cmd.group : null;
                lastGroup = cmd.group;
                return (
                  <li key={cmd.group + cmd.label}>
                    {header && (
                      <p className="px-3 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{header}</p>
                    )}
                    <button
                      data-index={i}
                      onMouseMove={() => setActive(i)}
                      onClick={() => execute(cmd)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                        i === active ? "bg-white/[0.06] text-fg" : "text-muted"
                      }`}
                    >
                      <span className={i === active ? "text-amber" : ""}>{cmd.icon}</span>
                      <span className="flex-1">{cmd.label}</span>
                      {cmd.hint && <span className="font-mono text-xs text-dim">{cmd.hint}</span>}
                      {i === active && <ArrowUpRight className="text-dim" />}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between border-t border-line px-5 py-2.5 font-mono text-[10px] text-dim">
              <span>{t.hints}</span>
              <span>{profile.initials} / cmd</span>
            </div>
          </div>
        </div>
      )}
      <div
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[95] -translate-x-1/2 rounded-full border border-line bg-raised px-4 py-2 text-sm shadow-xl transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {toast}
      </div>
    </>
  );
};

export default CommandMenu;
