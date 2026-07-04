import { heroSkills } from "@/data/skills";

export function SkillMarquee() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3 shadow-lg shadow-black/10 sm:rounded-3xl sm:p-4">
        <p className="px-2 pb-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500 sm:hidden">Werkzeuge / Themen</p>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          {heroSkills.map((skill) => (
            <span key={skill} className="rounded-2xl border border-orange-300/20 bg-orange-300/10 px-3 py-2.5 text-center text-sm text-orange-100 sm:rounded-full sm:px-4 sm:py-2 sm:text-left">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
