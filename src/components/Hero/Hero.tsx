import { profile } from "@/data/profile";
import type { Content } from "@/content";
import { ArrowDown, ArrowUpRight } from "../icons";
import Portrait from "./Portrait";
import RotatingWord from "./RotatingWord";

const SplitChars = ({ text, startDelay = 0 }: { text: string; startDelay?: number }) => (
  <span aria-hidden>
    {[...text].map((char, i) => (
      <span key={i} className="char" style={{ animationDelay: `${startDelay + i * 55}ms` }}>
        {char}
      </span>
    ))}
  </span>
);

const Hero = ({ t }: { t: Content["hero"] }) => (
  <section id="top" className="relative flex min-h-svh items-center overflow-hidden pb-24 pt-32">
    {/* Backdrop: fading grid + warm and cool light */}
    <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_70%)]" />
    <div aria-hidden className="absolute -right-40 -top-40 -z-10 size-[42rem] rounded-full bg-amber/10 blur-[140px]" />
    <div aria-hidden className="absolute -bottom-60 -left-40 -z-10 size-[36rem] rounded-full bg-sky/[0.07] blur-[140px]" />

    <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="fade-up mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 py-1.5 pl-2 pr-4 text-sm text-muted backdrop-blur [animation-delay:.1s]">
          <span className="relative grid size-5 place-items-center">
            <span className="animate-pulse-dot size-2 rounded-full bg-green-400" />
          </span>
          {t.currently} <span className="text-fg">{t.role}</span>
          <span className="hidden sm:inline">
            {t.at} {t.company}
          </span>
        </p>

        <h1 className="font-serif text-[clamp(4.25rem,13vw,10.5rem)] leading-[0.86] tracking-[-0.02em]">
          <span className="sr-only">{profile.name}</span>
          <span className="block">
            <SplitChars text={profile.firstName} startDelay={150} />
          </span>
          <span aria-hidden className="block overflow-hidden pb-[0.08em] pl-[0.04em]">
            <span className="text-gold fade-up inline-block italic [animation-delay:.55s] [animation-duration:1.2s]">
              {profile.lastName}
            </span>
          </span>
        </h1>

        <p className="fade-up mt-10 font-serif text-3xl leading-tight md:text-4xl [animation-delay:.8s]">
          {t.buildPrefix} <RotatingWord words={t.rotating} /> {t.buildSuffix}
        </p>
        <p className="fade-up mt-4 max-w-lg text-lg leading-relaxed text-muted [animation-delay:.9s]">{t.intro}</p>

        <div className="fade-up mt-10 flex flex-wrap items-center gap-3 [animation-delay:1s]">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 font-medium text-ink transition-all hover:gap-3 hover:bg-[#ffc57a]"
          >
            {t.talk}
            <ArrowUpRight className="transition-transform group-hover:rotate-45" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 transition-colors hover:border-white/25 hover:bg-white/[0.03]"
          >
            {t.resume}
            <span className="font-mono text-xs text-dim">PDF</span>
          </a>
        </div>
      </div>

      <div className="fade-up [animation-delay:.4s] [animation-duration:1.4s]">
        <Portrait t={t} />
      </div>
    </div>

    <a
      href="#about"
      className="fade-up absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-dim transition-colors hover:text-fg md:flex [animation-delay:1.4s]"
    >
      {t.scroll}
      <ArrowDown className="animate-bounce" />
    </a>
  </section>
);

export default Hero;
