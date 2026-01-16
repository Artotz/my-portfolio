import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-zinc-800/40 blur-3xl" />
      <motion.div
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-zinc-800/70 bg-zinc-950/70 px-6 py-12 text-left sm:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
          React • Mobile • Produto
        </p>
        <h1 className="text-3xl font-bold text-white sm:text-5xl">
          Desenvolvedor focado em React, mobile e produtos bem construídos.
        </h1>
        <p className="max-w-2xl text-sm text-zinc-300 sm:text-lg">
          Entrego experiências digitais prontas para o mundo real: rápidas,
          sustentáveis e fáceis de evoluir, do protótipo ao lançamento.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#Projetos"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
          >
            Ver projetos
          </a>
          <a
            href="https://github.com/Artotz"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900/70"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arturmcatunda/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900/70"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}
