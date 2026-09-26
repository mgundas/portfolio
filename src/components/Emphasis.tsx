/** Renders text with *asterisk-wrapped* runs as <em>, styled by `className`. */
const Emphasis = ({ text, className = "" }: { text: string; className?: string }) => (
  <>
    {text.split(/(\*[^*]+\*)/).map((part, i) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <em key={i} className={className}>
          {part.slice(1, -1)}
        </em>
      ) : (
        part
      ),
    )}
  </>
);

export default Emphasis;
