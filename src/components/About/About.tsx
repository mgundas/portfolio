import { manifesto, stats, story } from "@/data/profile";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Manifesto from "./Manifesto";

const accents = ["bg-sky", "bg-amber", "bg-fg"];

const About = () => (
  <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
    <SectionHeading
      index="01"
      eyebrow="About"
      title={
        <>
          The long way <em className="text-muted">into</em> code.
        </>
      }
    />

    <div className="max-w-5xl">
      <Manifesto text={manifesto} />
    </div>

    <div className="relative mt-24 grid gap-10 md:mt-32 md:grid-cols-3 md:gap-8">
      <div aria-hidden className="absolute left-0 right-0 top-[5px] hidden h-px bg-gradient-to-r from-sky/50 via-amber/60 to-white/10 md:block" />
      {story.map((chapter, i) => (
        <Reveal key={chapter.label} delay={i * 120} className="relative">
          <span className={`relative block size-[11px] rounded-full ring-4 ring-ink ${accents[i]}`}>
            {i === 1 && <span className="absolute inset-0 animate-ping rounded-full bg-amber/70" />}
          </span>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {String(i + 1).padStart(2, "0")} · {chapter.label}
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-tight">{chapter.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{chapter.body}</p>
        </Reveal>
      ))}
    </div>

    <Reveal className="mt-24 grid grid-cols-2 overflow-hidden rounded-3xl border border-line md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`bg-surface/40 p-6 md:p-8 ${i % 2 === 0 ? "border-r border-line" : ""} ${i < 2 ? "border-b border-line md:border-b-0" : ""} ${i === 1 ? "md:border-r" : ""}`}
        >
          <p className="font-serif text-5xl md:text-6xl">{s.value}</p>
          <p className="mt-2 text-sm text-muted">{s.label}</p>
        </div>
      ))}
    </Reveal>
  </section>
);

export default About;
