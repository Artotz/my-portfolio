import { useState } from "react";

type HeaderProps = {
  title: string;
  headerColor: "filled" | "transparent";
  scrollRatio: number;
  itemList: string[];
  scrollFunction: (e: any) => void;
};

export default function Header(props: HeaderProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const headerItemList = (id: string, i: number) => {
    return (
      <button
        key={i}
        tabIndex={-1}
        className={
          props.headerColor !== "filled"
            ? "flex p-1 px-2 border-2 duration-500 bg-white text-black border-black hover-hover:hover:bg-black hover-hover:hover:text-white hover-hover:hover:border-white"
            : "flex p-1 px-2 border-2 duration-500 bg-black text-white border-white hover-hover:hover:bg-white hover-hover:hover:text-black hover-hover:hover:border-black"
        }
        onClick={() => {
          document.getElementById(id)?.scrollIntoView();
          props.scrollFunction(null);
          setIsHamburgerOpen(false);
        }}
      >
        {id}
      </button>
    );
  };

  const headerItemListMobile = (id: string, i: number) => {
    return (
      <button
        key={i}
        tabIndex={-1}
        className={
          props.headerColor !== "filled"
            ? "flex p-1 px-2 border-t-2 last:border-b-2 duration-500 bg-white text-black border-black"
            : "flex p-1 px-2 border-t-2 last:border-b-2 duration-500 bg-black text-white border-white"
        }
        onClick={() => {
          document.getElementById(id)?.scrollIntoView();
          props.scrollFunction(null);
          setIsHamburgerOpen(false);
        }}
      >
        {id}
      </button>
    );
  };

  return (
    <header className="fixed w-full z-[999]">
      <title>{props.title}</title>
      <div
        className="flex flex-col sticky w-full h-12 top-0 border-black border-b-2 duration-1000 z-[999] overflow-clip"
        style={
          props.headerColor == "filled"
            ? {
                backgroundColor: "#000",
                borderColor: "black",
              }
            : {
                backgroundColor: "transparent",
                borderColor: "transparent",
              }
        }
      >
        {/* ITEMS */}
        <div className="flex flex-grow w-full h-full justify-between items-center text-xs">
          {/* ESQUERDA */}
          <div className="flex flex-grow px-4 justify-start items-center text-xs">
            <div
              className="text-3xl font-bold duration-1000"
              style={
                props.headerColor == "filled"
                  ? {
                      color: "white",
                    }
                  : {
                      color: "black",
                    }
              }
            >
              HEADER
            </div>
          </div>

          {/* DIREITA */}
          {/* LISTA */}
          <div className="hidden sm:flex gap-2 px-2 justify-around items-center text-xs">
            {props.itemList.map((v, i) => headerItemList(v, i))}
          </div>
          {/* HAMBURGER */}
          <div className="flex flex-col h-full sm:hidden gap-2 px-2 justify-center items-center text-xs">
            <button
              tabIndex={-1}
              className={
                props.headerColor !== "filled"
                  ? "flex h-full flex-col gap-[4px] justify-center items-center duration-500"
                  : "flex h-full flex-col gap-[4px] justify-center items-center duration-500"
              }
              onClick={() => {
                setIsHamburgerOpen(!isHamburgerOpen);
              }}
            >
              <div
                className={
                  props.headerColor !== "filled"
                    ? "flex w-[24px] h-[4px] duration-500 bg-black"
                    : "flex w-[24px] h-[4px] duration-500 bg-white"
                }
                style={
                  isHamburgerOpen
                    ? { translate: "0 200%", transform: "rotate(-45deg)" }
                    : { translate: "0", transform: "rotate(0deg)" }
                }
              ></div>
              <div
                className={
                  props.headerColor !== "filled"
                    ? "flex w-[24px] h-[4px] duration-500 bg-black"
                    : "flex w-[24px] h-[4px] duration-500 bg-white"
                }
                style={
                  isHamburgerOpen
                    ? { translate: "12.5%", scale: "0 100%", opacity: 100 }
                    : { translate: "0", scale: "100% 100%", opacity: 100 }
                }
              ></div>
              <div
                className={
                  props.headerColor !== "filled"
                    ? "flex w-[24px] h-[4px] duration-500 bg-black"
                    : "flex w-[24px] h-[4px] duration-500 bg-white"
                }
                style={
                  isHamburgerOpen
                    ? { translate: "0 -200%", transform: "rotate(45deg)" }
                    : { translate: "0", transform: "rotate(0deg)" }
                }
              ></div>
            </button>
          </div>
        </div>

        {/* SCROLL PROGRESS BAR */}
        <div
          className="flex h-2 bg-red-500/75"
          style={{
            width: `${props.scrollRatio}%`,
            transition: "1s",
          }}
        ></div>
      </div>

      <div
        className="flex sm:hidden absolute flex-col w-full h-fit overflow-hidden duration-500"
        style={
          isHamburgerOpen
            ? {
                left: "65vw",
              }
            : {
                left: "100vw",
              }
        }
      >
        {props.itemList.map((v, i) => headerItemListMobile(v, i))}
      </div>
    </header>
  );
}
