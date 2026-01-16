import { useState } from "react";

type HeaderProps = {
  title: string;
  itemList: string[];
  scrolled: boolean;
};

export default function Header({ title, itemList, scrolled }: HeaderProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const linkClasses =
    "inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

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
            href="#In\u00edcio"
            className="text-lg font-semibold text-white transition hover:text-indigo-200"
          >
            {title}
          </a>

          <nav className="hidden items-center gap-2 sm:flex">
            {itemList.map((item) => (
              <a key={item} href={`#${item}`} className={linkClasses}>
                {item}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            className="flex h-10 w-10 items-center justify-center sm:hidden"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <span className="sr-only">Menu</span>
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
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-2">
          {itemList.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-white/5"
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
