"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/utils/projects/projectsList-br";
import { translations } from "@/utils/translations";
import SkillsSection from "@/components/SkillsSection";
import { ScrollSnapContainer } from "@/components/ScrollSnapContainer";

import prismaWebSS from "../assets/prismaweb.png";

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

  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  const onScroll = useCallback(
    (_event: Event) => {
      let _ratio = 0;

      const sectionHelper = document.getElementsByTagName("main")[0];

      setScrollHeight(sectionHelper.scrollHeight);
      setScrollTop(sectionHelper.scrollTop);

      _ratio = clamp(
        Math.floor((scrollTop / (scrollHeight - window.innerHeight)) * 100),
        0,
        100
      );

      // _ratio = _ratio < 5 ? 0 : _ratio;
      _ratio = _ratio > 95 ? 100 : _ratio;

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
    },
    [scrollTop, scrollHeight, scrollRatio]
  );

  useEffect(() => {
    //add eventlistener to window
    document
      .getElementsByTagName("main")[0]
      .addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document
        .getElementsByTagName("main")[0]
        .removeEventListener("scroll", onScroll, {
          passive: true,
        } as EventListenerOptions);
    };
  }, [onScroll]);

  return (
    <main
      id="main"
      className="flex flex-col w-full h-screen no-scrollbar scroll-smooth overflow-y-scroll"
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
          <div className="flex flex-grow text-7xl font-bold text-white text-center justify-center items-center">
            HERO
          </div>
        </ScrollSnapContainer>

        {/* SOBRE */}
        <ScrollSnapContainer>
          <div id={titles[1]} className="flex">
            <SectionTitle title={titles[1]} />
          </div>
          <div className="flex flex-grow text-3xl font-bold text-white text-center justify-center items-center">
            é sobre
          </div>
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
        <ScrollSnapContainer>
          <div id={titles[3]} className="flex">
            <SectionTitle title={titles[3]} />
          </div>
          <PortfolioSection project={projectsList[0]} />
        </ScrollSnapContainer>

        <ScrollSnapContainer>
          <PortfolioSection project={projectsList[1]} />
        </ScrollSnapContainer>

        <ScrollSnapContainer>
          <PortfolioSection project={projectsList[2]} />
        </ScrollSnapContainer>

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
