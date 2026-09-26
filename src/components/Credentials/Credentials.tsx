import { certificates, education, values } from "@/data/profile";
import { ArrowUpRight } from "../icons";
import Reveal from "../Reveal";

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">{children}</p>
);

const Credentials = () => (
  <section className="relative mx-auto max-w-7xl px-5 pb-24 md:px-10 md:pb-32">
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
      <Reveal>
        <Label>Education</Label>
        <ul className="grid gap-8">
          {education.map((e) => (
            <li key={e.degree} className="border-l border-line pl-6">
              <p className="font-mono text-xs text-dim">{e.period}</p>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl">{e.degree}</h3>
              <p className="mt-1 text-amber">{e.school}</p>
              <p className="mt-3 text-muted">{e.note}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120}>
        <Label>Certificates</Label>
        <ul className="border-t border-line">
          {certificates.map((c) => (
            <li key={c.name} className="group flex items-baseline justify-between gap-4 border-b border-line py-4">
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-1 hover:text-amber"
                >
                  {c.name}
                  <ArrowUpRight className="text-sm text-dim" />
                </a>
              ) : (
                <span className="transition-transform duration-300 group-hover:translate-x-1">{c.name}</span>
              )}
              <span className="shrink-0 font-mono text-xs text-dim">
                {c.issuer} · {c.year}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>

    <Reveal className="mt-24">
      <Label>What I stand for</Label>
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((v, i) => (
          <div key={v.name} className="spotlight rounded-3xl border border-line bg-surface/40 p-7">
            <p className="font-mono text-xs text-dim">0{i + 1}</p>
            <h3 className="mt-6 font-serif text-4xl italic">{v.name}</h3>
            <p className="mt-3 leading-relaxed text-muted">{v.body}</p>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

export default Credentials;
