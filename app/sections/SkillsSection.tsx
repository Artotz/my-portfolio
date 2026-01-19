"use client";

import { motion } from "framer-motion";

type SkillsSectionProps = {
  groups: {
    title: string;
    items: string[];
  }[];
};

export default function SkillsSection({ groups }: SkillsSectionProps) {
  const badgeContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const badgeItem = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
                type: "tween",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              variants={badgeContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                  variants={badgeItem}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
