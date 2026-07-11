import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { getBlogPost, publishedBlogPosts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Beitrag nicht gefunden" };

  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <Section className="pt-24">
        <Link href="/blog" className="mb-8 inline-flex text-sm font-semibold text-orange-200 transition hover:text-orange-100">← Zurück zum Blog</Link>
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span className="rounded-full border border-orange-300/25 bg-orange-400/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-orange-200">{post.category}</span>
            <time dateTime={post.date}>{new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(post.date))}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} Lesezeit</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-9 text-zinc-300">{post.excerpt}</p>
          <div className="mt-12 space-y-10">{post.contentSections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold text-white">{section.heading}</h2><p className="mt-4 leading-8 text-zinc-300">{section.body}</p></section>)}</div>
          <div className="mt-12 flex flex-wrap gap-2" aria-label="Tags">{post.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
          <Link href="/blog" className="mt-10 inline-flex rounded-full border border-orange-300/30 px-5 py-3 font-semibold text-orange-200 transition hover:bg-orange-300/10">Weitere Beiträge →</Link>
        </article>
      </Section>
      <CTA title="Mehr technische Themen entdecken?" text="Neben Blognotizen findest du hier Projekte, Experimente und Einblicke in meinen technischen Fokus." button="Mehr entdecken" />
    </>
  );
}
