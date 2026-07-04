import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projekte", description: "Technische Projekte von Jannis Niemann rund um Automatisierung, Embedded-Systeme und Prototyping." };

export default function ProjektePage() {
  return (
    <Section eyebrow="Projektübersicht" title="Projekte" className="pt-24">
      <p className="mb-10 max-w-3xl text-lg leading-8 text-zinc-300">Eine Sammlung technischer Projekte aus Schule, Weiterbildung und privatem Interesse – mit Fokus auf Automatisierung, Embedded-Systeme und praktische technische Umsetzung.</p>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
    </Section>
  );
}
