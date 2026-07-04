import { heroSkills } from "@/data/skills";

export function SkillMarquee() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
        {heroSkills.map((skill) => (
          <span key={skill} className="rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm text-orange-100">{skill}</span>
        ))}
      </div>
    </div>
  );
}
