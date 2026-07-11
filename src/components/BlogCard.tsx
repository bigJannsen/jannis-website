import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { Tag } from "./Tag";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-orange-300/35 hover:bg-white/[0.055] ${featured ? "lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:p-8" : ""}`}>
      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-orange-300">{post.category}</p>
        <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
          <time dateTime={post.date}>{new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(post.date))}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} Lesezeit</span>
        </div>
      </div>
      <div className="mt-7 flex flex-1 flex-col lg:mt-0">
        <h2 className={`${featured ? "text-3xl sm:text-4xl" : "text-2xl"} font-semibold tracking-tight text-white`}>{post.title}</h2>
        <p className="mt-4 flex-1 leading-7 text-zinc-300">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">{post.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
        <Link href={`/blog/${post.slug}`} className="mt-7 inline-flex w-fit rounded-full border border-orange-300/30 px-5 py-3 font-semibold text-orange-200 transition group-hover:bg-orange-300/10 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
          Beitrag lesen →
        </Link>
      </div>
    </article>
  );
}
