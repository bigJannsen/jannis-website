import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
      <Reveal>
        <p className="mb-5 font-mono text-sm uppercase tracking-[0.32em] text-orange-300/80">Elektrotechnik in Praxis</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">Moin, ich bin Jannis.</h1>
        <p className="mt-6 text-xl text-orange-100/90">Elektrotechnik · Konstruktion · Automatisierung · Embedded-Projekte</p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">Ich beschäftige mich mit technischen Systemen zwischen Hardware, Steuerung und praktischer Anwendung – beruflich in der Elektrokonstruktion und privat mit Automatisierungs- und Embedded-Projekten.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/entdecken" className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-zinc-950 transition hover:bg-orange-300">Jannis entdecken</Link>
          <Link href="/projekte" className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-orange-300/50 hover:bg-white/5">Projekte ansehen</Link>
        </div>
      </Reveal>
      <Reveal className="relative">
        {/* Platzhalter für ein späteres Portrait oder eine technische Grafik. */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,.30),transparent_28%),linear-gradient(135deg,#18181b,#09090b_58%,#431407)] shadow-2xl shadow-orange-950/30">
          <div className="absolute inset-8 rounded-[2rem] border border-orange-300/20" />
          <div className="absolute left-10 right-10 top-12 h-px bg-orange-300/40" />
          <div className="absolute bottom-12 left-10 right-10 grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, index) => <span key={index} className="h-2 rounded-full bg-orange-200/30" />)}
          </div>
          <div className="absolute inset-x-12 top-1/3 rounded-3xl border border-white/10 bg-zinc-950/65 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-orange-300">Signal / Control</p>
            <div className="mt-5 h-24 rounded-2xl bg-[linear-gradient(90deg,transparent_0_8%,rgba(251,146,60,.45)_8%_10%,transparent_10%_18%)] bg-[length:72px_100%]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
