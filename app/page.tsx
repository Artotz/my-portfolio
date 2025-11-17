"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/app/sections/ProjectSection";
import Header from "@/app/components/Header";
import SectionTitle from "@/app/components/SectionTitle";
import { projects } from "@/app/utils/projects/projectsList-br";
import { translations } from "@/app/utils/translations";
import SkillsSection from "@/app/sections/SkillsSection";
import { ScrollSnapContainer } from "@/app/components/ScrollSnapContainer";

import prismaWebSS from "../assets/prismaweb.png";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  const [inicialColor, setInitialColor] = useState("#CCF");
  const [finalColor, setFinalColor] = useState("#004");

  const [headerColor, setHeaderColor] = useState<"filled" | "transparent">(
    "transparent"
  );

  const [scrollRatio, setScrollRatio] = useState(0);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const titles = translations.br.Home.titles;

  const projectsList = projects;

  const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
  };

  const onScroll = useCallback(() => {
    let _ratio = 0;

    const sectionHelper =
      document.documentElement || document.body.parentNode || document.body;

    setScrollHeight(sectionHelper.scrollHeight);
    setScrollTop(sectionHelper.scrollTop);
    // setScrollTop(_scrollTop);

    _ratio = clamp(
      Math.floor((scrollTop / (scrollHeight - window.innerHeight)) * 100),
      0,
      100
    );

    _ratio = _ratio < 1 ? 0 : _ratio;
    _ratio = _ratio > 99 ? 100 : _ratio;

    if (_ratio > 0) setHeaderColor("filled");
    else setHeaderColor("transparent");

    setScrollRatio(_ratio);

    console.log(
      "Top",
      scrollTop,
      "Height",
      scrollHeight - window.innerHeight,
      "Ratio",
      scrollRatio
    );
  }, [scrollTop, scrollHeight, scrollRatio]);

  useEffect(() => {
    //add eventlistener to window
    document
      // .getElementsByTagName("section")[0]
      .addEventListener("scroll", onScroll, { passive: true });

    onScroll();
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document
        // .getElementsByTagName("section")[0]
        .removeEventListener("scroll", onScroll, {
          passive: true,
        } as EventListenerOptions);
    };
  }, [onScroll]);

  return (
    <main
      id="main"
      className="flex flex-col w-full h-full no-scrollbar scroll-smooth overflow-x-clip"
    >
      <Header
        title="My Portfolio"
        headerColor={headerColor}
        scrollRatio={scrollRatio}
        itemList={[...titles]}
        scrollFunction={onScroll}
      ></Header>

      <section
        id="sections"
        className="flex-auto flex-col w-full no-scrollbar scroll-smooth bg-gradient-to-b from-transparent to-[#000]"
      >
        {/* INÍCIO */}
        <div id={titles[0]} className="flex"></div>
        <ScrollSnapContainer>
          <HeroSection />
        </ScrollSnapContainer>

        {/* SOBRE */}
        <ScrollSnapContainer>
          <div id={titles[1]} className="flex">
            <SectionTitle title={titles[1]} />
          </div>
          <AboutSection />
        </ScrollSnapContainer>

        {/* HABILIDADES */}
        <ScrollSnapContainer>
          <div id={titles[2]} className="flex">
            <SectionTitle title={titles[2]} />
          </div>
          <SkillsSection />
        </ScrollSnapContainer>

        {/* PROJETOS */}

        {/* LISTA DE PROJETOS */}
        {projectsList.map((project, i) => (
          <ScrollSnapContainer key={i}>
            {i === 0 && (
              <div id={titles[3]} className="flex">
                <SectionTitle title={titles[3]} />
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
