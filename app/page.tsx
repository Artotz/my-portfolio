"use client";

import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "@/components/PortfolioSection";

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
    "#00bcd4"
  ]);
  const [headerColor, setHeaderColor] = useState("transparent");
  const [scrollRatio, setScrollRatio] = useState(0);
  

  const onScroll = useCallback((_event: Event) => {
    //const { scrollY } = window;
    //console.log("scrollY", _event);

    const scrollTop = document.getElementById("sections")?.scrollTop;
    const scrollHeight = document.getElementById("sections")?.scrollHeight;
    let ratio;

    console.log("bruh", scrollTop, "bruh", scrollHeight);

    if (scrollTop && scrollHeight) {
      ratio = Math.floor((scrollTop / scrollHeight) * 100 * (100 / 93));
      setScrollRatio(ratio);

      if (ratio > 0) setHeaderColor("#333");
      else setHeaderColor("transparent");

      ;//console.log("ratio", ratio);
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    document
      .getElementById("sections")
      ?.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document
        .getElementById("sections")
        ?.removeEventListener("scroll", onScroll, {
          passive: true,
        } as EventListenerOptions);
    };
  }, []);

  
  useEffect(() => {
    console.log("emems");
  }, []);

  //useEffect(() => {}, []);

  return (
    <>
      <header>
        <title>Color Gradient</title>
        <div
          className="flex flex-col fixed w-full h-12 top-0"
          style={{
            backgroundColor: headerColor,
            zIndex: 999,
            transition: "1s",
          }}
        >
          <div className="flex flex-grow w-full h-full justify-around items-center text-xs">
            <button className="flex p-1 bg-slate-500 border-black border-2 rounded-full">
              teste
            </button>
            <button className="flex p-1 bg-slate-500 border-black border-2 rounded-full">
              teste
            </button>
            <button className="flex p-1 bg-slate-500 border-black border-2 rounded-full">
              teste
            </button>
          </div>
          <div
            className="flex h-2 bg-red-400"
            style={{
              width: `${scrollRatio}%`,
              transition: "1s",
            }}
          ></div>
        </div>
      </header>
      <main id="main" className="flex w-full h-screen">
        <div
          id="sections"
          className="flex-auto flex-col w-full h-full no-scrollbar overflow-y-scroll scroll-smooth snap-y snap-mandatory px-2 py-16"
        >
          {colors.map((color, index, array) => (
            <div
              id={color}
              key={index}
              className={`flex flex-row gap-4 w-full h-[80vh] my-1 snap-center align-middle items-center justify-center`}
              style={{
                backgroundImage: `linear-gradient(${color}, ${
                  index == array.length - 1 ? "#000000" : array[index + 1]
                })`,
              }}
            >
              <PortfolioSection />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
