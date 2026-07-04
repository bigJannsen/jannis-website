import Link from "next/link";

export type ProjectCardProps = { category: string; title: string; description: string; tags: string[]; href?: string; featured?: boolean };

export function ProjectCard({ category, title, description, tags, href, featured }: ProjectCardProps) {
  const body = (
    <article className={`flex h-full flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${featured ? "border-orange-300/35 bg-orange-500/[0.08]" : "border-white/10 bg-white/[0.04] hover:border-orange-300/30"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300/80">{category}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-4 flex-1 leading-7 text-zinc-400">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">{tag}</span>)}</div>
      {href ? <span className="mt-7 font-semibold text-orange-300">Projekt ansehen →</span> : null}
    </article>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}
