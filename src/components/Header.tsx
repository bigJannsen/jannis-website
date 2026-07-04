"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Start" },
  { href: "/entdecken", label: "Entdecken" },
  { href: "/projekte", label: "Projekte" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Hauptnavigation">
        <Link href="/" className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-zinc-100">JN<span className="text-orange-400">.</span>Tech</Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-zinc-300 transition hover:text-orange-300">{link.label}</Link>)}
          <Link href="/entdecken#kontakt" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-orange-300">Kontakt</Link>
        </div>
        <button className="rounded-xl border border-white/10 p-2 text-zinc-100 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menü öffnen">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-zinc-950 px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="rounded-2xl px-3 py-3 text-zinc-200 hover:bg-white/5">{link.label}</Link>)}
            <Link onClick={() => setOpen(false)} href="/entdecken#kontakt" className="rounded-2xl bg-orange-500 px-3 py-3 text-center font-semibold text-zinc-950">Kontakt</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
