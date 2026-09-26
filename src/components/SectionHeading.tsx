import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
};

const SectionHeading = ({ index, eyebrow, title, aside }: SectionHeadingProps) => (
  <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_auto] md:items-end">
    <Reveal>
      <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-amber">{index}</span>
        <span className="h-px w-10 bg-line" />
        {eyebrow}
      </p>
      <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
        {title}
      </h2>
    </Reveal>
    {aside && (
      <Reveal delay={150} className="max-w-sm text-muted md:text-right">
        {aside}
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
