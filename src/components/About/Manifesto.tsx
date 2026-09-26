"use client";
import { useEffect, useRef } from "react";

/**
 * A paragraph whose words light up one by one as it scrolls through the viewport.
 * Words wrapped in *asterisks* are emphasised.
 */
const Manifesto = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  let emphasis = false;
  const words = text.split(" ").map((raw) => {
    const opens = raw.startsWith("*");
    const closes = raw.endsWith("*") || raw.endsWith("*.");
    if (opens) emphasis = true;
    const word = { text: raw.replaceAll("*", ""), em: emphasis };
    if (closes) emphasis = false;
    return word;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.3);
      el.style.setProperty("--p", Math.min(Math.max(progress, 0), 1).toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p
      ref={ref}
      className="font-serif text-4xl leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-6xl"
      style={{ "--p": 0, "--n": words.length } as React.CSSProperties}
    >
      <span className="sr-only">{text.replaceAll("*", "")}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <span
            key={i}
            className={`transition-opacity duration-200 motion-reduce:!opacity-100 ${w.em ? "italic text-amber" : ""}`}
            style={{ opacity: `clamp(0.14, calc(var(--p) * var(--n) * 1.15 - ${i}), 1)` }}
          >
            {w.text}{" "}
          </span>
        ))}
      </span>
    </p>
  );
};

export default Manifesto;
