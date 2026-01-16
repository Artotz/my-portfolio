"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/app/sections/ProjectSection";
import Header from "@/app/components/Header";
import SectionTitle from "@/app/components/SectionTitle";
import { projects } from "@/app/utils/projects/projectsList-br";
import { translations } from "@/app/utils/translations";
import SkillsSection from "@/app/sections/SkillsSection";
import { ScrollSnapContainer } from "@/app/components/ScrollSnapContainer";

import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  const [headerColor, setHeaderColor] = useState<"filled" | "transparent">(
    "transparent"
  );

  const titles = translations.br.Home.titles;

  const projectsList = projects;

  const onScroll = useCallback(() => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setHeaderColor(scrollTop > 16 ? "filled" : "transparent");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <main
      id="main"
      className="flex flex-col w-full h-full no-scrollbar scroll-smooth overflow-x-clip"
    >
      <Header
        title="Artur Catunda"
        headerColor={headerColor}
        itemList={[...titles]}
        scrollFunction={onScroll}
      ></Header>

      <section
        id="sections"
        className="flex-auto flex-col w-full no-scrollbar scroll-smooth bg-gradient-to-b from-transparent to-[#000]"
      >
        {/* INÍCIO */}
        <div id={titles[0]} className="flex"></div>
        <ScrollSnapContainer fullScreen>
          <HeroSection />
        </ScrollSnapContainer>

        {/* SOBRE */}
        <ScrollSnapContainer>
          <div id={titles[1]} className="flex">
            <SectionTitle
              title={titles[1]}
              subtitle="Um pouco do meu contexto e de como trabalho no dia a dia."
            />
          </div>
          <AboutSection />
        </ScrollSnapContainer>

        {/* HABILIDADES */}
        <ScrollSnapContainer>
          <div id={titles[2]} className="flex">
            <SectionTitle
              title={titles[2]}
              subtitle="Tecnologias que uso para construir produtos escaláveis."
            />
          </div>
          <SkillsSection />
        </ScrollSnapContainer>

        {/* PROJETOS */}

        {/* LISTA DE PROJETOS */}
        {projectsList.map((project, i) => (
          <ScrollSnapContainer key={i}>
            {i === 0 && (
              <div id={titles[3]} className="flex">
                <SectionTitle
                  title={titles[3]}
                  subtitle="Cases selecionados com foco em problema, solução e impacto."
                />
              </div>
            )}
            <PortfolioSection project={project} />
          </ScrollSnapContainer>
        ))}

        {/* END */}
        <ScrollSnapContainer>
          <div className="flex flex-grow text-7xl font-bold text-white text-center justify-center items-center">
            {`</body>`}
          </div>
          {/* FOOTER */}
          <div className="flex flex-col w-full h-8 justify-center items-center bg-black text-sm font-bold text-white text-center">
            Copyright © 2024 - Artur Melo Catunda
          </div>
        </ScrollSnapContainer>
      </section>
    </main>
  );
}
