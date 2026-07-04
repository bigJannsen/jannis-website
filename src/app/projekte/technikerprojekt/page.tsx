import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";

export const metadata: Metadata = { title: "Technikerprojekt", description: "Sensoremulation für Waschmaschinen mit ESP32, REST-Schnittstelle und technischem Prüfkonzept." };

const tech = ["ESP32", "REST-Schnittstelle", "Sensorik", "NTC-Emulation", "PWM / digitale Ansteuerung", "Prüf- und Automatisierungskonzept"];
const learnings = ["Verbindung von Elektrotechnik und Software", "Reproduzierbare technische Tests", "Umgang mit Sensorverhalten", "Strukturierung technischer Systeme", "Dokumentation und Projektkommunikation"];
const system = ["Bedienung / API", "ESP32", "Sensoremulation", "Zielsystem / Steuerung"];

export default function TechnikerprojektPage() {
  return (
    <>
      <Section eyebrow="Technikerprojekt" title="Technikerprojekt: Sensoremulation für Waschmaschinen" className="pt-24">
        <p className="max-w-3xl text-xl leading-9 text-zinc-300">Ein ESP32-basiertes System zur Emulation technischer Sensorsignale für Test- und Automatisierungsszenarien.</p>
      </Section>
      <Section eyebrow="Überblick" title="Worum es geht">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"><h3 className="text-xl font-semibold text-white">Problemstellung</h3><p className="mt-4 leading-8 text-zinc-300">Bei Tests technischer Systeme ist es nicht immer praktikabel, reale physikalische Zustände vollständig nachzustellen. Temperatur, Druck oder andere Sensorwerte müssen reproduzierbar erzeugt werden können, ohne jedes Szenario real aufzubauen.</p></article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"><h3 className="text-xl font-semibold text-white">Lösungsidee</h3><p className="mt-4 leading-8 text-zinc-300">Das Projekt verfolgt die Idee, Sensorsignale kontrolliert zu emulieren. Eine Steuerung kann dadurch definierte Zustände sehen, obwohl diese nicht physikalisch vorhanden sind. So lassen sich Abläufe flexibler, reproduzierbarer und besser automatisierbar untersuchen.</p></article>
        </div>
      </Section>
      <Section eyebrow="System" title="Systemaufbau">
        <div className="grid gap-4 md:grid-cols-4">{system.map((item, index) => <div key={item} className="relative rounded-3xl border border-orange-300/20 bg-orange-500/[0.06] p-6"><p className="font-mono text-sm text-orange-300">0{index + 1}</p><h3 className="mt-6 font-semibold text-white">{item}</h3>{index < system.length - 1 ? <span className="absolute -right-3 top-1/2 hidden text-orange-300 md:block">→</span> : null}</div>)}</div>
      </Section>
      <Section eyebrow="Technik" title="Verwendete Technik">
        <div className="flex flex-wrap gap-3">{tech.map((item) => <span key={item} className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-zinc-300">{item}</span>)}</div>
      </Section>
      <Section eyebrow="Stand" title="Aktueller Stand">
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">Das Projekt befindet sich im Aufbau und wird schrittweise erweitert. Fokus liegt auf stabiler Signalerzeugung, nachvollziehbarer Struktur und einer verständlichen Dokumentation.</p>
      </Section>
      <Section eyebrow="Learnings" title="Was dabei entsteht">
        <ul className="grid gap-3 md:grid-cols-2">{learnings.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-zinc-300">{item}</li>)}</ul>
      </Section>
      <CTA title="Fragen zum Technikerprojekt?" text="Wenn du dich über Sensorik, Testautomatisierung oder den Aufbau austauschen möchtest, schreib mir gerne." />
    </>
  );
}
