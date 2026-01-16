"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import SectionTitle from "@/app/components/SectionTitle";
import { projects } from "@/app/utils/projects/projectsList-br";
import { translations } from "@/app/utils/translations";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";
import ProcessSection from "./sections/ProcessSection";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const titles = translations.br.Home.titles;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header title="Artur Catunda" itemList={titles} scrolled={scrolled} />

      <section id="In\u00edcio" className="pb-16 sm:pb-24">
        <HeroSection />
      </section>

      <section id="Sobre" className="py-16 sm:py-24">
        <SectionTitle
          title="Sobre"
          subtitle="Um resumo direto sobre como trabalho e o que valorizo."
        />
        <div className="mt-10">
          <AboutSection />
        </div>
      </section>

      <section id="Projetos" className="py-16 sm:py-24">
        <ProjectSection projects={projects} />
      </section>

      <section id="Habilidades" className="py-16 sm:py-24">
        <SectionTitle
          title="Habilidades"
          subtitle="Stack organizada por dom\u00ednio para leitura r\u00e1pida."
        />
        <div className="mt-10">
          <SkillsSection />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <SectionTitle
          title="Como eu trabalho"
          subtitle="Processo simples, comunica\u00e7\u00e3o clara e evolu\u00e7\u00e3o constante."
        />
        <div className="mt-10">
          <ProcessSection />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="max-w-2xl text-sm text-zinc-300 sm:text-base">
            Estou dispon\u00edvel para projetos, parcerias e conversas sobre produto,
            frontend e mobile.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:arturmcatunda@gmail.com"
              className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/arturmcatunda/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>\u00a9 2024 Artur Melo Catunda</span>
          <span>Constru\u00eddo com Next.js, Tailwind e framer-motion.</span>
        </div>
      </footer>
    </main>
  );
}
