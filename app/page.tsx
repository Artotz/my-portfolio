"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";

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

  const [headerColor, setHeaderColor] = useState("transparent");
  const [scrollRatio, setScrollRatio] = useState(0);

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const [sectionScrollPadding, setSectionScrollPadding] = useState(25);

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
        100
      );

      _ratio = _ratio < 5 ? 0 : _ratio;
      _ratio = _ratio > 95 ? 100 : _ratio;

      if (_ratio > 0) setHeaderColor("#333");
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
        itemList={["bruh1", "bruh2"]}
      />

      <section
        id="sections"
        className="flex-auto flex-col w-full h-full no-scrollbar bg-slate-500 overflow-y-scroll scroll-pt-12 scroll-smooth snap-y snap-mandatory px-2"
      >
        {/* PADDING ARTIFICIAL */}
        <div className={`flex w-full h-[${sectionScrollPadding}vh]`}></div>

        <div id="gapDiv" className="flex flex-col gap-8">
          <PortfolioSection topColor={colors[0]} bottomColor={colors[1]} />

          <div id="bruh1" className="flex">
            <SectionTitle title="Titulo 1" />
          </div>

          <PortfolioSection topColor={colors[1]} bottomColor={colors[2]} />
          <PortfolioSection topColor={colors[2]} bottomColor={colors[3]} />
          <PortfolioSection topColor={colors[3]} bottomColor={colors[4]} />

          <div id="bruh2" className="flex">
            <SectionTitle title="Titulo 2" />
          </div>

          <PortfolioSection topColor={colors[4]} bottomColor={colors[5]} />
          <PortfolioSection topColor={colors[5]} bottomColor={colors[6]} />
          <PortfolioSection topColor={colors[6]} bottomColor={colors[7]} />
          <PortfolioSection topColor={colors[7]} bottomColor={colors[8]} />
        </div>

        {/* PADDING ARTIFICIAL */}
        <div className={`flex w-full h-[${sectionScrollPadding}vh]`}></div>
      </section>
    </main>
  );
}
