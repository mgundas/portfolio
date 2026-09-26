"use client";
import { useEffect } from "react";

/**
 * One global listener that feeds cursor coordinates into every `.spotlight`
 * card under the pointer, and a page-wide glow that trails the cursor.
 */
const SpotlightTracker = () => {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow?.style.setProperty("transform", `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`);
        const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight");
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          card.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      id="cursor-glow"
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[600px] rounded-full bg-[radial-gradient(circle,rgb(255_182_87/0.07),transparent_60%)] md:block"
    />
  );
};

export default SpotlightTracker;
