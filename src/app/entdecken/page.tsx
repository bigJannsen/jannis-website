import type { Metadata } from "next";
import { FocusCard } from "@/components/FocusCard";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { focusAreas, skillGroups } from "@/data/skills";

export const metadata: Metadata = { title: "Entdecken", description: "Über Jannis Niemann, technischen Fokus, Werdegang, Werkzeuge und Kontakt." };

export default function EntdeckenPage() {
  return (
    <>
      <Section eyebrow="Über mich" title="Technik verstehen, Signale nachbilden, Lösungen bauen." className="pt-24">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-300">
          <p>Ich bin gelernter Elektroniker für Betriebstechnik und arbeite heute in der Elektrokonstruktion. Parallel mache ich den staatlich geprüften Elektrotechniker berufsbegleitend.</p>
          <p>Technisch interessiert mich besonders die Verbindung aus Hardware, Steuerungstechnik und praktischer Anwendung: Systeme verstehen, Signale nachbilden, Abläufe automatisieren und Lösungen bauen, die in der Realität funktionieren.</p>
        </div>
      </Section>
      <Section eyebrow="Fokus" title="Technischer Fokus">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{focusAreas.map((item) => <FocusCard key={item.title} {...item} />)}</div>
      </Section>
      <Section eyebrow="Werdegang" title="Stationen">
        <Timeline />
      </Section>
      <Section eyebrow="Werkzeuge" title="Werkzeuge & Skills">
        <div className="grid gap-5 md:grid-cols-2">{skillGroups.map((group) => <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h3 className="font-semibold text-white">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10">{item}</span>)}</div></div>)}</div>
      </Section>
      <Section eyebrow="Kontakt" title="Kontakt" className="scroll-mt-24" >
        <div id="kontakt" className="rounded-3xl border border-orange-300/20 bg-orange-500/[0.06] p-8">
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">Du möchtest dich austauschen oder hast eine Frage zu einem Projekt? Schreib mir gerne.</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href="mailto:hallo@example.com" className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-zinc-950">E-Mail schreiben</a><a href="https://github.com/" className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white">GitHub ansehen</a><a href="#" className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white">LinkedIn/Xing</a></div>
        </div>
      </Section>
    </>
  );
}
