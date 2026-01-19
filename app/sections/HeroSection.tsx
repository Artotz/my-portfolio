"use client";

import { motion } from "framer-motion";

type HeroSectionProps = {
  badge: string;
  headline: string;
  subheadline: string;
  proof: string[];
};

export default function HeroSection({
  badge,
  headline,
  subheadline,
  proof,
}: HeroSectionProps) {
  const badgesContainer = {
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
    <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12">
      <motion.div
        className="flex flex-col gap-6 text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
          {badge}
        </p>
        <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
          {headline}
        </h1>
        <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
          {subheadline}
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        variants={badgesContainer}
        initial="hidden"
        animate="show"
      >
        {proof.map((item) => (
          <motion.span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200"
            variants={badgeItem}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
