import { experience } from "@/data/profile";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const Experience = () => (
  <section id="experience" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
    <SectionHeading
      index="02"
      eyebrow="Experience"
      title={
        <>
          Where I&apos;ve <em className="text-gold">shipped</em>.
        </>
      }
      aside="From lesson plans to payment gateways. Every role taught me to make complex things feel simple for the people using them."
    />

    <ol className="border-t border-line">
      {experience.map((job, i) => (
        <Reveal as="li" key={job.role + job.company} delay={i * 60}>
          <article className="spotlight group grid gap-6 border-b border-line px-2 py-10 transition-colors md:grid-cols-[220px_1fr] md:gap-10 md:px-6 md:py-12">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              <p className={i === 0 ? "text-amber" : ""}>{job.period}</p>
              <p className="mt-2 text-dim">{job.location}</p>
            </div>

            <div>
              <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                {job.role}
                <span className="text-muted"> at </span>
                <span className="italic text-muted transition-colors group-hover:text-fg">{job.company}</span>
              </h3>

              <ul className="mt-6 grid gap-3 text-muted lg:grid-cols-2 lg:gap-x-10">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-amber/60" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  </section>
);

export default Experience;
