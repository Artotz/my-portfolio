"use client";

import { useEffect, useState, type MouseEvent } from "react";

type Locale = "pt-BR" | "en-US";

const localeOptions: {
  code: Locale;
  label: string;
  flagSrc: string;
}[] = [
  { code: "pt-BR", label: "Portuguese", flagSrc: "/flag-br.svg" },
  { code: "en-US", label: "English", flagSrc: "/flag-us.svg" },
];

type HeaderProps = {
  title: string;
  itemList: string[];
  labels: {
    openMenuLabel: string;
    menuLabel: string;
  };
  locale: Locale;
};

export default function Header({
  title,
  itemList,
  labels,
  locale,
}: HeaderProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkClasses =
    "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-zinc-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 spectrum-hover-parent spectrum-button";

  const buildAnchorHref = (targetId: string) =>
    `#${encodeURIComponent(targetId)}`;

  const homeAnchor = itemList[0] ? buildAnchorHref(itemList[0]) : "#";

  const scrollToId = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const y = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string | undefined,
    closeMenu = false,
  ) => {
    if (!targetId) {
      return;
    }

    event.preventDefault();

    if (closeMenu) {
      setIsHamburgerOpen(false);
    }

    scrollToId(targetId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

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
            onClick={(event) => handleAnchorClick(event, itemList[0])}
          >
            <span className="spectrum-text-hover" data-text={title}>
              {title}
            </span>
          </a>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-2 sm:flex">
              {itemList.map((item) => (
                <a
                  key={item}
                  href={buildAnchorHref(item)}
                  className={linkClasses}
                  onClick={(event) => handleAnchorClick(event, item)}
                >
                  <span className="spectrum-text-hover" data-text={item}>
                    {item}
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {localeOptions.map((option) => {
                const isActive = option.code === locale;
                return (
                  <button
                    key={option.code}
                    type="button"
                    aria-label={`Switch language to ${option.label}`}
                    aria-pressed={isActive}
                    title={option.label}
                    onClick={() => handleLocaleChange(option.code)}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition focus-visible:outline-none"
                  >
                    <img
                      src={option.flagSrc}
                      alt=""
                      aria-hidden="true"
                      className={`h-5 w-5 transition ${
                        isActive ? "grayscale-0" : "grayscale"
                      }`}
                      loading="lazy"
                    />
                    <span className="sr-only">{option.label}</span>
                  </button>
                );
              })}
            </div>

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
              href={buildAnchorHref(item)}
              className="px-4 py-2 text-sm font-semibold text-zinc-100 transition"
              onClick={(event) => handleAnchorClick(event, item, true)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
