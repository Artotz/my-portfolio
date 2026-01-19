"use client";

import { motion } from "framer-motion";

type HeroSectionProps = {
  badge: string;
  headline: string;
  subheadline: string;
  ctaProjects: string;
  ctaContact: string;
  proof: string[];
  projectsAnchor: string;
};

export default function HeroSection({
  badge,
  headline,
  subheadline,
  ctaProjects,
  ctaContact,
  proof,
  projectsAnchor,
}: HeroSectionProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-24 sm:pt-28">
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
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`#${projectsAnchor}`}
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {ctaProjects}
          </a>
          <a
            href="https://wa.me/558582011193"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {ctaContact}
          </a>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-3">
        {proof.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
