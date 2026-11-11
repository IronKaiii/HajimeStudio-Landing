import { useEffect, useRef, useState } from "react";

const LINE_ONE = "Start with curiosity.";
const LINE_TWO = "Ship work that still feels like the first spark.";

function Word({
  word,
  active,
  reduce,
}: {
  word: string;
  active: boolean;
  reduce: boolean;
}) {
  return (
    <span className={`tagline-word${active || reduce ? " is-on" : ""}`}>
      {word}
    </span>
  );
}

export function TaglineReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [reduce, setReduce] = useState(false);

  const words = [...LINE_ONE.split(" "), ...LINE_TWO.split(" ")];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduce) {
      setActiveCount(words.length);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const onFrame = () => {
      const rect = section.getBoundingClientRect();
      const trigger = window.innerHeight * 0.62;
      const progress = (trigger - rect.top) / (rect.height * 0.7);
      const next = Math.max(0, Math.min(words.length, Math.floor(progress * words.length)));
      setActiveCount(next);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(onFrame);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce, words.length]);

  let index = 0;

  return (
    <section className="tagline-section" ref={sectionRef} aria-label="Studio promise">
      <div className="shell tagline-inner">
        <p className="heading-2 tagline-line">
          {LINE_ONE.split(" ").map((word) => {
            const i = index++;
            return (
              <Word key={`a-${word}-${i}`} word={word} active={i < activeCount} reduce={reduce} />
            );
          })}
        </p>
        <p className="heading-2 tagline-line">
          {LINE_TWO.split(" ").map((word) => {
            const i = index++;
            return (
              <Word key={`b-${word}-${i}`} word={word} active={i < activeCount} reduce={reduce} />
            );
          })}
        </p>
      </div>
    </section>
  );
}
