import type { Experiment } from "@/data/experiments";
import { SignalFlowDemo } from "./SignalFlowDemo";
import { StatusBadge } from "./StatusBadge";
import { Tag } from "./Tag";

function Preview({ type }: { type: Experiment["preview"] }) {
  if (type === "signal") return <SignalFlowDemo />;

  if (type === "grid") {
    return <div className="relative h-36 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:22px_22px]"><div className="absolute inset-8 rounded-full bg-orange-500/20 blur-2xl" /><div className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" /></div>;
  }

  if (type === "cards") {
    return <div className="grid h-36 grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-zinc-950/60 p-4">{[0, 1, 2].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] shadow-xl shadow-black/20 transition group-hover:-translate-y-1" />)}</div>;
  }

  return <div className="relative h-36 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 p-5"><div className="h-4 w-28 rounded-full bg-orange-300/80" /><div className="mt-4 h-3 w-44 rounded-full bg-white/15" /><div className="mt-3 h-3 w-32 rounded-full bg-white/10" /><div className="absolute bottom-5 right-5 h-12 w-12 rounded-full border border-orange-300/40 bg-orange-500/10" /></div>;
}

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.025))] p-5 transition hover:-translate-y-1 hover:border-orange-300/35">
      <Preview type={experiment.preview} />
      <div className="mt-6 flex items-center justify-between gap-4"><h2 className="text-xl font-semibold text-white">{experiment.title}</h2><StatusBadge status={experiment.status} /></div>
      <p className="mt-4 flex-1 leading-7 text-zinc-300">{experiment.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{experiment.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
    </article>
  );
}
