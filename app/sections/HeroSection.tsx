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
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-12">
      <motion.div
        className="flex flex-col gap-6 text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            delay: 0.25,
            ease: "easeOut",
            type: "tween",
          },
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
          {badge}
        </p>
        <h1 className="spectrum-text-animate text-balance py-1 text-4xl font-bold text-white sm:text-5xl">
          {headline}
        </h1>
        <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
          {subheadline}
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            delay: 0.25,
            ease: "easeOut",
            type: "tween",
          },
        }}
      >
        {proof.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
