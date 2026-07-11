import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { Section } from "@/components/Section";
import { publishedBlogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Aktuelle Themen, technische Gedanken und Einordnungen von Jannis Niemann zu Elektrotechnik, Automatisierung, Embedded-Systemen und Projekten.",
};

export default function BlogPage() {
  const [featuredPost, ...posts] = publishedBlogPosts;

  return (
    <>
      <Section eyebrow="Notizen & Einordnung" title="Blog" className="pt-24">
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">Aktuelle Themen, technische Gedanken und kleine Einordnungen aus Elektrotechnik, Automatisierung, Embedded-Systemen und allem, was mich gerade beschäftigt.</p>
      </Section>
      <Section eyebrow="Featured" title="Aktueller Beitrag" className="pt-0">
        <BlogCard post={featuredPost} featured />
      </Section>
      <Section eyebrow="Weitere Beiträge" title="Technische Notizen mit Praxisbezug" className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      </Section>
    </>
  );
}
