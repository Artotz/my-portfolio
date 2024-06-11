"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Header from "@/components/Header";

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

  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  const onScroll = useCallback(
    (_event: Event) => {
      let ratio;

      const _scrollTop = document.getElementById("sections")?.scrollTop;

      if (_scrollTop) setScrollTop(_scrollTop);

      if (_scrollTop) {
        ratio = clamp(
          Math.floor(
            ((_scrollTop - window.innerHeight / 2) /
              (scrollHeight - window.innerHeight * 2)) *
              100,
          ),
          0,
          100,
        );
        setScrollRatio(ratio);

        if (ratio > 10) setHeaderColor("#333");
        else setHeaderColor("transparent");
      }
      console.log(
        "Top",
        scrollTop - window.innerHeight / 2,
        "Height",
        scrollHeight - window.innerHeight * 2,
        "Ratio",
        scrollRatio,
      );
    },
    [scrollTop, scrollHeight, scrollRatio],
  );

  useEffect(() => {
    setScrollHeight(document.getElementsByTagName("section")[0].scrollHeight);
  }, []);

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
    <>
      <Header
        title="My Portfolio"
        headerColor={headerColor}
        scrollRatio={scrollRatio}
        onClick={() => {
          document.getElementById("bruh2")?.scrollIntoView();
        }}
      />
      <main id="main" className="flex w-full h-screen">
        <section
          id="sections"
          className="flex-auto flex-col w-full h-full no-scrollbar bg-slate-500 overflow-y-scroll scroll-pt-32 scroll-smooth snap-y snap-mandatory px-2 "
        >
          {/* PADDING ARTIFICIAL */}
          <div className="flex w-full h-[50vh]"></div>

          <div
            id="bruh"
            className="flex w-full justify-center items-center text-7xl font-bold text-white"
          >
            Titulo
          </div>
          <PortfolioSection topColor={colors[0]} bottomColor={colors[1]} />
          <PortfolioSection topColor={colors[1]} bottomColor={colors[2]} />
          <PortfolioSection topColor={colors[2]} bottomColor={colors[3]} />
          <div
            id="bruh2"
            className="flex w-full justify-center items-center text-7xl font-bold text-white"
          >
            Titulo
          </div>
          <PortfolioSection topColor={colors[3]} bottomColor={colors[4]} />
          <PortfolioSection topColor={colors[4]} bottomColor={colors[5]} />

          {/* PADDING ARTIFICIAL */}
          <div className="flex w-full h-[50vh]"></div>
        </section>
      </main>
    </>
  );
}
