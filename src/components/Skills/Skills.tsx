import type { Content } from "@/content";
import Emphasis from "../Emphasis";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const Skills = ({ t }: { t: Content["skills"] }) => (
  <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
    <SectionHeading
      index="04"
      eyebrow={t.eyebrow}
      title={<Emphasis text={t.title} className="text-muted" />}
      aside={t.aside}
    />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {t.groups.map((category, i) =>
        category.featured ? (
          <Reveal key={category.group} className="sm:col-span-2 lg:col-span-3">
            <div className="spotlight relative grid gap-8 overflow-hidden rounded-3xl border border-amber/25 bg-gradient-to-br from-amber/[0.08] via-surface/40 to-surface/40 p-7 transition-colors hover:border-amber/40 md:p-9 lg:grid-cols-[1fr_1.3fr] lg:items-center">
              <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-amber/10 blur-3xl" />
              <div>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-amber">
                  <span aria-hidden>✦</span> {t.featured}
                </p>
                <h3 className="mt-4 font-serif text-4xl md:text-5xl">{category.group}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">{category.note}</p>
              </div>
              <ul className="flex flex-wrap gap-2 lg:justify-end">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-amber/25 bg-ink/60 px-4 py-2 text-fg/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : (
        <Reveal key={category.group} delay={(i % 3) * 100}>
          <div className="spotlight h-full rounded-3xl border border-line bg-surface/40 p-7 transition-colors hover:border-white/15">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-3xl">{category.group}</h3>
              <span className="font-mono text-xs text-dim">{String(category.items.length + (category.learning?.length ?? 0)).padStart(2, "0")}</span>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="cursor-default rounded-full border border-line bg-ink/60 px-3.5 py-1.5 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/50 hover:text-fg"
                >
                  {item}
                </li>
              ))}
              {category.learning?.map((item) => (
                <li
                  key={item}
                  title={t.learningTitle}
                  className="flex cursor-default items-center gap-2 rounded-full border border-dashed border-white/15 px-3.5 py-1.5 text-sm text-muted"
                >
                  {item}
                  <span className="font-mono text-[10px] uppercase tracking-wider text-dim">{t.learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        ),
      )}
    </div>
  </section>
);

export default Skills;
