import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-zinc-500 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Jannis Niemann. Persönliche Technik-Website.</p>
        <div className="flex gap-5">
          <Link href="/entdecken">Entdecken</Link>
          <Link href="/projekte">Projekte</Link>
          <Link href="/entdecken#kontakt">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
