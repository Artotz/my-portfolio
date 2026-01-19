"use client";

import { motion } from "framer-motion";

type ProcessSectionProps = {
  steps: {
    title: string;
    description: string;
  }[];
};

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <motion.div
            key={step.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
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
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-zinc-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
