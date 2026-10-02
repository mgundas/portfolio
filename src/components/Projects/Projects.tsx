import Image from "next/image";
import type { Content } from "@/content";
import Emphasis from "../Emphasis";
import { ArrowUpRight } from "../icons";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const Projects = ({ t }: { t: Content["work"] }) => (
  <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
    <div aria-hidden className="absolute left-1/2 top-1/3 -z-10 h-[40rem] w-full max-w-[40rem] -translate-x-1/2 rounded-full bg-amber/[0.05] blur-[140px]" />

    <SectionHeading
      index="03"
      eyebrow={t.eyebrow}
      title={<Emphasis text={t.title} className="text-gold" />}
      aside={t.aside}
    />

    <div className="grid gap-6">
      {t.projects.map((project, i) => {
        // Alternate the screenshot side on desktop for rhythm.
        const flip = i % 2 === 1;
        // Projects without a public deployment (local apps) lead with their first link instead.
        const isLive = Boolean(project.url);
        const primary = isLive ? { label: t.visit, url: project.url! } : project.links![0];
        const secondary = isLive ? project.links ?? [] : project.links!.slice(1);
        const host = isLive ? new URL(project.url!).host : project.localHost;
        return (
          <Reveal key={project.name}>
            <article className={`spotlight group grid overflow-hidden rounded-[2rem] border border-line bg-surface/50 transition-colors hover:border-white/15 ${flip ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`}>
              <div className={`flex flex-col justify-between gap-10 p-7 md:p-10 ${flip ? "lg:order-2" : ""}`}>
                <div>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {isLive ? (
                      <span className="flex items-center gap-2 text-green-400">
                        <span className="size-1.5 rounded-full bg-green-400" /> {t.live}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-sky">
                        <span className="size-1.5 rounded-full bg-sky" /> {t.runsLocally}
                      </span>
                    )}
                    <span className="h-px w-6 bg-line" />
                    {project.kind}
                  </p>
                  <h3 className="mt-6 font-serif text-5xl md:text-6xl">{project.name}</h3>
                  <p className="mt-3 font-serif text-2xl italic text-amber">{project.tagline}</p>
                  <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

                  <ul className="mt-8 grid gap-2.5 text-sm">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="mt-[0.6em] h-px w-3 shrink-0 bg-amber/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-6">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={primary.url}
                      target="_blank"
                      className="group/link inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-ink transition-all hover:gap-3 hover:bg-[#ffc57a]"
                    >
                      {primary.label}
                      <ArrowUpRight className="transition-transform group-hover/link:rotate-45" />
                    </a>
                    {secondary.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        className="group/sec inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-white/25 hover:text-fg"
                      >
                        {link.label}
                        <ArrowUpRight className="transition-transform group-hover/sec:rotate-45" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Browser-framed screenshot */}
              <a href={primary.url} target="_blank" aria-label={`${t.open} ${project.name}`} className={`relative block self-center p-4 pt-0 md:p-8 lg:pt-8 ${flip ? "lg:pr-0" : "lg:pl-0"}`}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-raised shadow-2xl shadow-black/50 transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-0.6deg]">
                  <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
                    <span className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-white/15" />
                      <span className="size-2.5 rounded-full bg-white/15" />
                      <span className="size-2.5 rounded-full bg-white/15" />
                    </span>
                    <span className="mx-auto rounded-md bg-white/[0.05] px-4 py-1 font-mono text-[11px] text-muted">{host}</span>
                    <span className="w-[42px]" />
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.name} ${t.homepageAlt}`}
                      fill
                      sizes="(min-width: 1024px) 40rem, 95vw"
                      className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </a>
            </article>
          </Reveal>
        );
      })}
    </div>
  </section>
);

export default Projects;
