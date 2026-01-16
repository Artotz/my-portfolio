import { useState } from "react";

type HeaderProps = {
  title: string;
  headerColor: "filled" | "transparent";
  itemList: string[];
  scrollFunction: (e: any) => void;
};

export default function Header(props: HeaderProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isFilled = props.headerColor === "filled";

  const headerItemClasses =
    "flex items-center justify-center rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900/70";

  const headerItemList = (id: string, i: number) => {
    return (
      <button
        key={i}
        tabIndex={-1}
        className={headerItemClasses}
        onClick={() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        className="flex w-full items-center border-b border-zinc-800 px-4 py-3 text-left text-sm font-semibold text-zinc-100 transition hover:bg-zinc-900/70"
        onClick={() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          props.scrollFunction(null);
          setIsHamburgerOpen(false);
        }}
      >
        {id}
      </button>
    );
  };

  return (
    <header className="fixed top-0 z-[999] w-full">
      <title>{props.title}</title>
      <div
        className={`flex h-14 w-full items-center border-b transition-colors duration-500 ${
          isFilled
            ? "border-zinc-800 bg-zinc-950/90 backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-between px-4">
          <div className="text-lg font-bold text-white sm:text-xl">
            {props.title}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            {props.itemList.map((v, i) => headerItemList(v, i))}
          </div>

          <div className="flex sm:hidden">
            <button
              tabIndex={-1}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              <span
                className={`h-[3px] w-[22px] rounded-full bg-white transition-transform duration-300 ${
                  isHamburgerOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[3px] w-[22px] rounded-full bg-white transition-all duration-300 ${
                  isHamburgerOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-[3px] w-[22px] rounded-full bg-white transition-transform duration-300 ${
                  isHamburgerOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute right-4 top-14 flex w-44 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/95 shadow-xl transition-transform duration-300 sm:hidden ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        {props.itemList.map((v, i) => headerItemListMobile(v, i))}
      </div>
    </header>
  );
}
