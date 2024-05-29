"use client"

import { useEffect, useState } from "react";

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
  ])

  useEffect(() => {
    
  }, [])

  return <main className="flex-auto flex-col w-full ">{
    colors.map((color, index, array) => (
      <section
        key={index}
        className={`flex w-full h-screen`}
        style={{backgroundImage: `linear-gradient(${color}, ${
          index == array.length-1 ? "#000000" : array[index+1]
        })`}}
      ></section>
    ))
  }</main>;
}
