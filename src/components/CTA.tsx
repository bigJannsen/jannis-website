import Link from "next/link";

export function CTA({ title, text, button = "Kontakt aufnehmen" }: { title: string; text: string; button?: string }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-orange-950/30 p-8 shadow-2xl shadow-orange-950/20 sm:p-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300/80">Kontakt</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">{text}</p>
          <Link href="/entdecken#kontakt" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}
