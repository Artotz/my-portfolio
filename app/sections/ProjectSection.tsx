"use client";

import { ProjectType } from "@/app/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

type ProjectSectionProps = {
  projects: ProjectType[];
  title: string;
  subtitle?: string;
  codeLabel: string;
  demoLabel: string;
  imageAlt: string;
};

function ProjectCard({
  project,
  labels,
  imageAlt,
}: {
  project: ProjectType;
  labels: { codeLabel: string; demoLabel: string };
  imageAlt: string;
}) {
  const highlights =
    project.highlights && project.highlights.length > 0
      ? project.highlights
      : project.problem
        ? [project.problem]
        : [project.description];

  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 spectrum-card"
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
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={`${imageAlt} ${project.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              {project.context ?? project.description}
            </p>
          </div>
          {project.year && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
              {project.year}
            </span>
          )}
        </div>

        <ul className="grid gap-2 text-sm text-zinc-200">
          {highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 text-xs text-indigo-300">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <a
            href={project.source}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5"
          >
            {labels.codeLabel}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target={project.demo.startsWith("http") ? "_blank" : undefined}
              rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5"
            >
              {labels.demoLabel}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectSection({
  projects,
  title,
  subtitle,
  codeLabel,
  demoLabel,
  imageAlt,
}: ProjectSectionProps) {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            labels={{ codeLabel, demoLabel }}
            imageAlt={imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
