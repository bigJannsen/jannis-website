import type { Metadata } from "next";
import { ExperimentCard } from "@/components/ExperimentCard";
import { Section } from "@/components/Section";
import { SignalFlowDemo } from "@/components/SignalFlowDemo";
import { experiments } from "@/data/experiments";

export const metadata: Metadata = {
  title: "Experimental",
  description: "Spielwiese von Jannis Niemann für UI-Ideen, Animationen, technische Visuals und kontrollierte Frontend-Experimente.",
};

export default function ExperimentalPage() {
  return (
    <>
      <Section eyebrow="Lab" title="Experimental" className="pt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <p className="max-w-3xl text-lg leading-8 text-zinc-300">Eine Spielwiese für UI-Ideen, Animationen, technische Visuals und alles, was nicht direkt auf die Hauptseite muss.</p>
          <div className="rounded-[2rem] border border-orange-300/20 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.18),transparent_18rem),rgba(255,255,255,.035)] p-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-orange-300">Signal Flow Demo</p>
            <SignalFlowDemo />
          </div>
        </div>
      </Section>
      <Section eyebrow="Experimente" title="Kontrollierte Spielwiese statt Chaos" className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">{experiments.map((experiment) => <ExperimentCard key={experiment.title} experiment={experiment} />)}</div>
      </Section>
    </>
  );
}
