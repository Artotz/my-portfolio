import { ProjectType } from "@/app/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";

type PortfolioSectionProps = {
  project: ProjectType;
};

function Chip({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200">
      {text}
    </span>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900/70"
    >
      {label}
    </a>
  );
}

export default function PortfolioSection(props: PortfolioSectionProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:grid md:grid-cols-[1.05fr_1.2fr] md:items-start">
      <motion.div
        className="flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Image
          src={props.project.image}
          width={640}
          height={640}
          alt={`Imagem do projeto ${props.project.title}`}
          className="h-auto w-full rounded-xl object-cover"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-6 text-left"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Case study
          </p>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {props.project.title}
          </h3>
        </div>

        <div className="grid gap-4 text-sm text-zinc-200 sm:text-base">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              O problema
            </p>
            <p>{props.project.problem}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              A solução
            </p>
            <p>{props.project.solution}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Meu papel
            </p>
            <p>{props.project.role}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Destaques/impacto
            </p>
            <ul className="grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
              {props.project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-xs text-zinc-500">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {props.project.technologies.map((tech, index) => (
                <Chip key={index} text={tech} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ProjectLink href={props.project.source} label="Código fonte" />
            {props.project.demo && (
              <ProjectLink href={props.project.demo} label="Demo" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
