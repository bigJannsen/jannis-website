const steps = ["API", "ESP32", "Sensorwert", "Zielsystem"];

export function SignalFlowDemo() {
  return (
    <div className="rounded-3xl border border-orange-300/20 bg-zinc-950/70 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 items-center gap-3">
            <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-200 shadow-lg shadow-orange-950/10">{step}</div>
            {index < steps.length - 1 ? <span className="hidden text-orange-300 sm:block" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-orange-500 via-orange-300 to-zinc-200" /></div>
    </div>
  );
}
