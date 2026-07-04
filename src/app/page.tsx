import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillMarquee } from "@/components/SkillMarquee";
import { focusAreas } from "@/data/skills";
import { projects } from "@/data/projects";

const traits = ["Praxisnah denken statt nur schön skizzieren", "Schnittstelle aus Hardware, Software und Dokumentation", "Technisch neugierig, aber mit Blick auf echte Anwendbarkeit", "Ruhige, nachvollziehbare Lösungen statt Showeffekt"];

export default function Home() {
  const [featuredProject, ...projectHighlights] = projects;

  return (
    <>
      <Hero />
      <SkillMarquee />
      <Section eyebrow="Über mich" title="Technik, die nicht nur auf dem Papier funktioniert." className="pt-10 lg:pt-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <p className="text-lg leading-8 text-zinc-300">Ich mag technische Aufgaben, bei denen man genau hinschauen muss: Wie verhält sich ein Signal? Wie wird ein Ablauf reproduzierbar? Und wie dokumentiert man eine Lösung so, dass sie später noch verstanden wird? Meine Website sammelt diesen Weg zwischen Elektrokonstruktion, Weiterbildung und eigenen Projekten.</p>
          <div className="rounded-[2rem] border border-orange-300/20 bg-[linear-gradient(135deg,rgba(251,146,60,.10),rgba(255,255,255,.035))] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-orange-300">Aktueller Fokus</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{focusAreas.map((item) => <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-950/55 p-4"><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p></div>)}</div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Projekte" title="Projektvorschau mit technischem Schwerpunkt">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <ProjectCard {...featuredProject} featured />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{projectHighlights.slice(0, 2).map((project) => <ProjectCard key={project.title} {...project} />)}</div>
        </div>
        <Link href="/projekte" className="mt-7 inline-flex rounded-full border border-orange-300/30 px-5 py-3 font-semibold text-orange-200 transition hover:bg-orange-300/10">Alle Projekte ansehen →</Link>
      </Section>
      <Section eyebrow="Arbeitsweise" title="Was mich ausmacht">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{traits.map((trait, index) => <article key={trait} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5"><p className="font-mono text-sm text-orange-300">0{index + 1}</p><h3 className="mt-5 text-lg font-semibold leading-7 text-white">{trait}</h3></article>)}</div>
      </Section>
      <CTA title="Technisches Thema, Projektidee oder einfach Austausch?" text="Schreib mir gerne, wenn du dich zu Elektrokonstruktion, Sensorik, Automatisierung oder einem Projekt austauschen möchtest." />
    </>
  );
}
