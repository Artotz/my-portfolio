"use client";

import { motion } from "framer-motion";

type SkillsSectionProps = {
  groups: {
    title: string;
    items: string[];
  }[];
};

export default function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 spectrum-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.35,
                delay: 0.25,
                ease: "easeOut",
                type: "tween",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10 spectrum-pill"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
