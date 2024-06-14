"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/utils/projects/projectsList-br";

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

  const titles = ["Início", "Habilidades", "Projetos"];

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
  });

  return (
    <main id="main" className="flex w-full h-screen">
      <Header
        title="My Portfolio"
        headerColor={headerColor}
        scrollRatio={scrollRatio}
        itemList={[...titles]}
      />

      <section
        id="sections"
        className="flex-auto flex-col w-full h-full no-scrollbar bg-slate-500 overflow-y-scroll scroll-pt-12 scroll-smooth snap-y snap-mandatory px-2"
      >
        {/* PADDING ARTIFICIAL */}
        <div className="flex w-full h-[25vh]"></div>

        <div id="gapDiv" className="flex flex-col gap-4">
          {/* INÍCIO */}
          <div id={titles[0]} className="flex">
            <PortfolioSection
              topColor={colors[0]}
              bottomColor={colors[1]}
              project={projectsList[0]}
            />
          </div>

          {/* HABILIDADES */}
          <div id={titles[1]} className="flex">
            <SectionTitle title={titles[1]} />
          </div>

          <PortfolioSection
            topColor={colors[1]}
            bottomColor={colors[2]}
            project={projectsList[0]}
          />

          {/* PROJETOS */}
          <div id={titles[2]} className="flex">
            <SectionTitle title={titles[2]} />
          </div>

          {projects.map((v, i) => {
            return (
              <PortfolioSection
                key={i}
                topColor={colors[2 + i]}
                bottomColor={colors[3 + i]}
                project={projectsList[i]}
              />
            );
          })}
        </div>
        {/* PADDING ARTIFICIAL */}
        <div className="flex w-full h-[25vh]"></div>
      </section>
    </main>
  );
}
