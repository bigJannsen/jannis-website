export function Tag({ children }: { children: string }) {
  return <span className="rounded-full bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-white/10">{children}</span>;
}
