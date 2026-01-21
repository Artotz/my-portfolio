"use client";

import { useEffect, useState } from "react";

type HeaderProps = {
  title: string;
  itemList: string[];
  labels: {
    openMenuLabel: string;
    menuLabel: string;
  };
};

export default function Header({ title, itemList, labels }: HeaderProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const homeAnchor = itemList[0] ? `#${itemList[0]}` : "#";
  const [scrolled, setScrolled] = useState(false);

  const linkClasses =
    "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-zinc-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 spectrum-hover-parent spectrum-button";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-[999] w-full">
      <div
        className={`flex h-16 w-full items-center transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-zinc-950/70 backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <a
            href={homeAnchor}
            className="spectrum-hover-parent text-lg font-semibold text-white transition"
          >
            <span className="spectrum-text-hover" data-text={title}>
              {title}
            </span>
          </a>

          <nav className="hidden items-center gap-2 sm:flex">
            {itemList.map((item) => (
              <a key={item} href={`#${item}`} className={linkClasses}>
                <span className="spectrum-text-hover" data-text={item}>
                  {item}
                </span>
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={labels.openMenuLabel}
            className="flex h-10 w-10 items-center justify-center sm:hidden"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <span className="sr-only">{labels.menuLabel}</span>
            <div className="flex flex-col gap-1">
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-transform ${
                  isHamburgerOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-opacity ${
                  isHamburgerOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-transform ${
                  isHamburgerOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`absolute right-6 top-16 w-48 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-xl backdrop-blur transition-all duration-300 sm:hidden ${
          isHamburgerOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {itemList.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-4 py-2 text-sm font-semibold text-zinc-100 transition"
              onClick={() => setIsHamburgerOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
