import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 lg:py-20">
      <div className="pointer-events-none absolute inset-x-5 top-8 -z-10 h-40 rounded-full bg-orange-500/10 blur-3xl sm:inset-x-20" />
      <Reveal className="order-2 lg:order-1">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-orange-300/80 sm:mb-5 sm:text-sm sm:tracking-[0.32em]">Elektrotechnik in Praxis</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Moin, ich bin Jannis Niemann.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-100/90 sm:text-xl">Elektrokonstruktion, Automatisierung und Embedded-Projekte – mit Blick für das, was später wirklich funktionieren muss.</p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">Ich komme aus der Betriebstechnik, arbeite in der Elektrokonstruktion und mache berufsbegleitend den staatlich geprüften Elektrotechniker. Mich interessieren Systeme dort, wo Stromlaufplan, Steuerung, Sensorik und saubere Dokumentation zusammenkommen.</p>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
          <Link href="/entdecken" className="rounded-full bg-orange-500 px-6 py-3.5 text-center font-semibold text-zinc-950 transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-zinc-950">Jannis entdecken</Link>
          <Link href="/projekte" className="rounded-full border border-white/15 px-6 py-3.5 text-center font-semibold text-white transition hover:border-orange-300/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-zinc-950">Projekte ansehen</Link>
        </div>
      </Reveal>
      <Reveal className="relative order-1 mx-auto w-full max-w-[25rem] sm:max-w-[31rem] lg:order-2 lg:max-w-none">
        <div className="absolute -left-4 top-8 hidden h-28 w-28 rounded-full border border-orange-300/20 sm:block" />
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-300/20 bg-[linear-gradient(145deg,rgba(39,39,42,.92),rgba(9,9,11,.96)_48%,rgba(67,20,7,.82))] p-3 shadow-2xl shadow-orange-950/35 sm:rounded-[2.75rem] sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(251,146,60,.34),transparent_28%),linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[auto,26px_26px,26px_26px]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] border border-white/10 bg-zinc-950/55 sm:rounded-[2.2rem]">
            <div className="absolute inset-6 rounded-[1.5rem] border border-orange-300/15 sm:inset-8" />
            <div className="absolute left-1/2 top-[18%] h-32 w-32 -translate-x-1/2 rounded-full border border-orange-200/30 bg-orange-300/10 shadow-[0_0_80px_rgba(251,146,60,.24)] sm:h-40 sm:w-40" />
            <div className="absolute bottom-[20%] left-1/2 h-48 w-[68%] -translate-x-1/2 rounded-t-full border border-orange-200/20 bg-gradient-to-b from-orange-300/12 to-zinc-900/50" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.24em] text-orange-200/70 sm:inset-x-9 sm:top-8">
              <span>Portrait-Slot</span><span>JN</span>
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-zinc-950/75 p-4 backdrop-blur sm:inset-x-8 sm:bottom-8 sm:p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-orange-300">Platzhalter für Foto</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Konstruktion · Automatisierung · Embedded</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
