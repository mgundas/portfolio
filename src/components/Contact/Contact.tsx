import { profile, socials } from "@/data/profile";
import { ArrowUpRight, FileText, GitHub, LinkedIn } from "../icons";
import LocalTime from "../LocalTime";
import Reveal from "../Reveal";
import CopyEmail from "./CopyEmail";

const links = [
  { label: "LinkedIn", href: socials.linkedin, icon: <LinkedIn /> },
  { label: "GitHub", href: socials.github, icon: <GitHub /> },
  { label: "Résumé", href: profile.resume, icon: <FileText /> },
];

const Contact = () => (
  <section id="contact" className="relative overflow-hidden border-t border-line">
    <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_50%_100%,black,transparent_70%)]" />
    <div aria-hidden className="absolute -bottom-72 left-1/2 -z-10 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-amber/15 blur-[160px]" />

    <div className="mx-auto max-w-7xl px-5 py-28 text-center md:px-10 md:py-44">
      <Reveal>
        <p className="mb-8 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-amber">05</span>
          <span className="h-px w-10 bg-line" />
          Contact
        </p>
        <h2 className="mx-auto max-w-5xl font-serif text-[clamp(3.25rem,9vw,8rem)] leading-[0.9] tracking-tight">
          Let&apos;s build something that <em className="text-gold">works.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted">
          Need a CRM that doesn&apos;t fight your team, an automation that saves hours, or a web app built with care?
          My inbox is open.
        </p>
      </Reveal>

      <Reveal delay={150} className="mt-12 flex flex-col items-center gap-6">
        <a
          href={socials.email}
          className="group inline-flex items-center gap-3 rounded-full bg-amber px-8 py-4 text-lg font-medium text-ink transition-all hover:gap-4 hover:bg-[#ffc57a] hover:shadow-[0_0_60px_rgb(255_182_87/0.35)]"
        >
          Say hello
          <ArrowUpRight className="transition-transform group-hover:rotate-45" />
        </a>
        <CopyEmail />
      </Reveal>

      <Reveal delay={250} className="mt-20 flex flex-wrap items-center justify-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg"
          >
            {l.icon}
            {l.label}
          </a>
        ))}
      </Reveal>

      <p className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-dim">
        {profile.coordinates} · <LocalTime seconds /> in {profile.location}
      </p>
    </div>
  </section>
);

export default Contact;
