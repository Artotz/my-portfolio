import { motion } from "framer-motion";

const proofItems = [
  "React",
  "Next.js",
  "React Native",
  "Tailwind",
  "TypeScript",
];

export default function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-24 sm:pt-28">
      <motion.div
        className="flex flex-col gap-6 text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
          Desenvolvimento de produtos digitais
        </p>
        <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
          Solu\u00e7\u00f5es React e mobile com foco em clareza, performance e evolu\u00e7\u00e3o.
        </h1>
        <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
          Eu construo produtos confi\u00e1veis para equipes e neg\u00f3cios, com c\u00f3digo
          limpo, ritmo sustent\u00e1vel e entregas que fazem sentido para o usu\u00e1rio.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#Projetos"
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Ver projetos
          </a>
          <a
            href="mailto:arturmcatunda@gmail.com"
            className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Contato
          </a>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-3">
        {proofItems.map((item) => (
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
