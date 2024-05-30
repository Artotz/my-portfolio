"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [colors, setColors] = useState([
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

  useEffect(() => {}, []);

  return (
    <>
      <header>
        <title>Color Gradient</title>
        <div className="flex fixed w-full h-16 top-0 bg-slate-500 border-black border-b-2 drop-shadow-[0_0px_5px_rgba(0,0,0,1)]"></div>
      </header>
      <main className="flex h-screen pt-16">
        <div className="flex-auto flex-col w-full h-fill overflow-y-scroll scroll-smooth snap-y snap-mandatory px-2 py-16">
          {colors.map((color, index, array) => (
            <div
              key={index}
              className={`flex flex-row gap-4 w-full h-[80vh] border-black border-2 my-1 snap-center align-middle items-center justify-center`}
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
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
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
