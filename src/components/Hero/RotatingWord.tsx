"use client";
import { useEffect, useState } from "react";

const RotatingWord = ({ words, interval = 2600 }: { words: string[]; interval?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span>
      <span key={index} className="word-in italic text-amber">
        {words[index]}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
};

export default RotatingWord;
