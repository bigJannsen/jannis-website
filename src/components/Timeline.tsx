import { timelineItems } from "@/data/timeline";

export function Timeline() {
  return (
    <div className="space-y-5">
      {timelineItems.map((item) => (
        <article key={item.year} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[120px_1fr]">
          <p className="font-mono text-sm text-orange-300">{item.year}</p>
          <div><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-2 text-zinc-400">{item.description}</p></div>
        </article>
      ))}
    </div>
  );
}
