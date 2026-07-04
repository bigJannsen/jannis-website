import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SkillMarquee } from "@/components/SkillMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillMarquee />
      <Section eyebrow="Projekte" title="Technische Projekte">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-semibold text-white">Technische Projekte</h3>
            <p className="mt-4 leading-8 text-zinc-300">Von Sensoremulation über SPS-Steuerungen bis zu Embedded-Systemen: Hier sammle ich Projekte, bei denen Hardware, Software und praktische Anwendung zusammenkommen.</p>
            <Link href="/projekte" className="mt-7 inline-flex font-semibold text-orange-300">Projekte ansehen →</Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-semibold text-white">Mehr als nur ein Lebenslauf.</h3>
            <p className="mt-4 leading-8 text-zinc-300">Auf der Entdecken-Seite geht es um meinen technischen Weg, meine Werkzeuge, Interessen und die Themen, mit denen ich mich aktuell beschäftige.</p>
            <Link href="/entdecken" className="mt-7 inline-flex font-semibold text-orange-300">Mehr über mich →</Link>
          </div>
        </div>
      </Section>
      <CTA title="Technisches Thema, Projektidee oder einfach Austausch?" text="Schreib mir gerne, wenn du dich austauschen möchtest oder Fragen zu einem Projekt hast." />
    </>
  );
}
