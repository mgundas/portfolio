"use client";
import Image from "next/image";
import { useRef } from "react";
import { profile } from "@/data/profile";
import LocalTime from "../LocalTime";

/** Portrait card that tilts toward the cursor, with a moving glare and parallax badges. */
const Portrait = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !cardRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    cardRef.current.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    cardRef.current.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div className="relative mx-auto w-full max-w-md [perspective:1200px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      {/* Golden-hour glow behind the card */}
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(255_160_70/0.35),transparent)] blur-2xl" />

      <div
        ref={cardRef}
        className="group relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-2xl shadow-black/60">
          <Image
            src={profile.image}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="scale-[1.03] object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          {/* Glare that follows the cursor */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--gx,50%)_var(--gy,50%),rgb(255_255_255/0.18),transparent_45%)]" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
            <div>
              <p className="font-serif text-2xl">{profile.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{profile.role}</p>
            </div>
            <div className="text-right font-mono text-[11px] text-muted">
              <p className="text-fg">
                <LocalTime />
              </p>
              <p>{profile.city}</p>
            </div>
          </div>
        </div>

        {/* Parallax badges float above the card */}
        <div className="absolute left-3 top-6 sm:top-10 rounded-full border border-white/10 bg-ink/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] backdrop-blur-md [transform:translateZ(60px)] sm:-left-10">
          <span className="text-muted">Teacher</span> <span className="text-amber">→</span> Engineer
        </div>
        <div className="absolute right-3 top-1/2 rounded-full border border-white/10 bg-ink/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] backdrop-blur-md [transform:translateZ(90px)] sm:-right-8">
          <span className="text-sky">EN</span> <span className="text-dim">/</span> TR
        </div>
      </div>
    </div>
  );
};

export default Portrait;
