import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24 ${className}`}>
      <Reveal>
        {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300/80">{eyebrow}</p> : null}
        {title ? <h2 className="mb-8 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2> : null}
        {children}
      </Reveal>
    </section>
  );
}
