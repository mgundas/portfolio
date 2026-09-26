const Marquee = ({ items }: { items: string[] }) => (
  <div aria-hidden className="mask-fade-x relative overflow-hidden border-y border-line py-8">
    <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center">
          {items.map((item, i) => (
            <li key={item} className="flex items-center font-serif text-4xl text-muted md:text-6xl">
              <span className={`px-8 transition-colors hover:text-fg ${i % 2 ? "italic" : ""}`}>{item}</span>
              <span className="text-2xl text-amber">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
