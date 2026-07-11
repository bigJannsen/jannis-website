import type { ExperimentStatus } from "@/data/experiments";

const statusStyles: Record<ExperimentStatus, string> = {
  Idee: "border-sky-300/25 bg-sky-400/10 text-sky-200",
  WIP: "border-orange-300/25 bg-orange-400/10 text-orange-200",
  Test: "border-violet-300/25 bg-violet-400/10 text-violet-200",
  Stabil: "border-emerald-300/25 bg-emerald-400/10 text-emerald-200",
};

export function StatusBadge({ status }: { status: ExperimentStatus }) {
  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusStyles[status]}`}>{status}</span>;
}
