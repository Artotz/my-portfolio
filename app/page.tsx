"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#9e9e9e",
    "#607d8b",
  ]);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [scrollRatio, setScrollRatio] = useState(0);

  const clickTeste2 = () => {
    document.getElementById("sections")?.scrollTo({top:0, behavior:"smooth"});
  }

  const clickTeste = () => {
    document.getElementById("#e91e63")?.scrollIntoView({behavior:"smooth"});
  }

  const onScroll = useCallback((_event: Event) => {
    //const { scrollY } = window;
    //console.log("scrollY", _event);

    const scrollTop = document.getElementById("sections")?.scrollTop;
    const scrollHeight = document.getElementById("sections")?.scrollHeight;
    
    if(scrollTop)
      if(scrollTop > 10)
        setHeaderColor("#333");
      
      else
        setHeaderColor("transparent");

    //console.log("top", scrollTop)
    if(scrollTop && scrollHeight){
      setScrollRatio(Math.floor(scrollTop/scrollHeight * 100 * (100/93)))
      console.log("ratio", Math.floor(scrollTop/scrollHeight * 100 * (100/93)))
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    document.getElementById("sections")?.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      document.getElementById("sections")?.removeEventListener("scroll", onScroll, { passive: true } as EventListenerOptions);
    }
  }, []);

  //useEffect(() => {}, []);

  return (
    <>
      <header>
        <title>Color Gradient</title>
        <div className="flex flex-col fixed w-full h-12 top-0"
          style={{
            backgroundColor: headerColor,
            zIndex: 999,
            transition: "1s"
          }}
        >
          <div className="flex flex-grow w-full h-fill justify-around items-center text-xs">
            <div className="flex p-1 bg-slate-500 border-black border-2 rounded-full">bruh</div>
            <div className="flex p-1 bg-slate-500 border-black border-2 rounded-full">bruh</div>
            <div className="flex p-1 bg-slate-500 border-black border-2 rounded-full">bruh</div>
          </div>
          <div className="flex h-2 bg-red-400"
          style={{
            width: `${scrollRatio}%`,
            transition: "1s"
          }}></div>
        </div>
      </header>
      <main id="main" className="flex w-full h-screen" >
        <div id="sections" className="flex-auto flex-col w-full h-fill no-scrollbar overflow-y-scroll scroll-smooth snap-y snap-mandatory px-2 py-16">
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
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                teste
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <button
                  onClick={clickTeste}
                >
                  teste
                </button>
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                teste
              </motion.div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
