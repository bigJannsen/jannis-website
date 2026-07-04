export function FocusCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-orange-400/[0.06]">
      <div className="mb-5 h-10 w-10 rounded-2xl bg-orange-400/15 ring-1 ring-orange-300/30" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{description}</p>
    </article>
  );
}
