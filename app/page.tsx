"use client";

import { useCallback, useEffect, useState } from "react";
import { PortfolioSection } from "@/components/PortfolioSection";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/utils/projects/projectsList-br";
import { translations } from "@/utils/translations";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  const [colors, setColors] = useState([
    "#ffffff",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
  ]);

  const [headerColor, setHeaderColor] = useState<"filled" | "transparent">(
    "transparent",
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

      const sectionHelper = document.getElementsByTagName("section")[0];

      setScrollHeight(sectionHelper.children[1].clientHeight);
      setScrollTop(sectionHelper.scrollTop);

      _ratio = clamp(
        Math.floor((scrollTop / (scrollHeight - window.innerHeight)) * 100),
        0,
        100,
      );

      _ratio = _ratio < 5 ? 0 : _ratio;
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
        scrollRatio,
      );
    },
    [scrollTop, scrollHeight, scrollRatio],
  );

  useEffect(() => {
    //add eventlistener to window
    document
      .getElementsByTagName("section")[0]
      .addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document
        .getElementsByTagName("section")[0]
        .removeEventListener("scroll", onScroll, {
          passive: true,
        } as EventListenerOptions);
    };
  }, [onScroll]);

  return (
    <main id="main" className="flex flex-col w-full h-screen">
      <Header
        title="My Portfolio"
        headerColor={headerColor}
        scrollRatio={scrollRatio}
        itemList={[...titles]}
      />

      <section
        id="sections"
        className="flex-auto flex-col w-full h-full no-scrollbar overflow-y-scroll scroll-pb-4 scroll-smooth snap-y snap-mandatory"
      >
        {/* PADDING ARTIFICIAL */}
        <div className="flex w-full h-[25vh] bg-red-300"></div>

        <div
          id="gapDiv"
          className="flex flex-col gap-2 bg-gradient-to-b from-red-300 to-blue-300"
        >
          {/* INÍCIO */}
          <div id={titles[0]} className="flex">
            <PortfolioSection project={projectsList[0]} />
          </div>

          {/* SOBRE */}
          <div id={titles[1]} className="flex">
            <SectionTitle title={titles[1]} />
          </div>
          <PortfolioSection project={projectsList[0]} />

          {/* HABILIDADES */}
          <div id={titles[2]} className="flex">
            <SectionTitle title={titles[2]} />
          </div>
          <SkillsSection />

          {/* PROJETOS */}
          <div id={titles[3]} className="flex">
            <SectionTitle title={titles[3]} />
          </div>
          {projects.map((v, i) => {
            if (i % 2 == 0) {
              return <PortfolioSection key={i} project={projectsList[i]} />;
            } else {
              return <PortfolioSection key={i} project={projectsList[i]} />;
            }
          })}

          {/* END */}
          <div
            className={`flex flex-col gap-4 w-full h-[80vh] snap-end snap-always`}
          >
            <div className="flex flex-grow text-7xl font-bold text-white justify-center items-center">
              THANKS FOR WATCHING
            </div>
            <div className="flex flex-col w-full h-8 justify-center items-center bg-black text-sm font-bold text-white text-center">
              BRUH
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
