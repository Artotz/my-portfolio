const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Expo Router", "Async Storage"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Spring", "Firebase", "REST APIs"],
  },
  {
    title: "Infra/Tooling",
    items: ["Git", "GitHub Actions", "Docker", "Vite", "Jest"],
  },
];

export default function SkillsSection() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
