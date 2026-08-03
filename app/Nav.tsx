"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, memo } from "react";
import { motion } from "framer-motion";

interface NavLink {
  name: string;
  path: string;
}

function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Services" },
    { name: "Resume", path: "/Resume" },
    { name: "Work", path: "/Work" },
    { name: "Contact", path: "/Contact" },
  ];

  // Scroll Effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close with ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);



  return (
    <>
      {/* Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100000] bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg"
      >
        Skip to main content
      </a>

      <nav
        ref={navRef}
        aria-label="Primary navigation"
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 
          ${scrolled
            ? "bg-black/40 backdrop-blur-md h-16 sm:h-16 md:h-[4.5rem] lg:h-[4.5rem]"
            : " bg-transparent h-20 sm:h-20 md:h-24 lg:h-24"
          } flex items-center`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* 🔸 Logo */}
          <Link
            href="/"
            aria-label="Ahmed Alkattan - Home"
            className="group text-lg py-1.5  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-unbounded text-white transition-all duration-700 hover:text-[var(--primary-color)]"
          >
            Ahmed{" "}
            <span className="text-[var(--primary-color)] font-unbounded transition-all duration-700 group-hover:text-white">
              Alkattan.
            </span>
          </Link>

          {/* 🔸 Menu Area */}
          <div
            className="flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-5"
          >
            {/* Desktop Links */}
            <motion.div
              className="hidden lg:flex items-center gap-3 xl:gap-4 nav-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >

              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  title={`Go to ${name} page`}
                  aria-current={pathname === path ? "page" : undefined}
                  className={`group relative text-base xl:text-lg font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg px-2 py-1 hover:text-[var(--primary-color)] ${pathname === path ? "text-[var(--primary-color)]" : "text-white"}`}
                >
                  {name}
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-[var(--primary-color)] transition-all duration-300 rounded-full w-0 group-hover:w-full`}></span>
                </Link>
              ))}
            </motion.div>

            {/* 🔸 Hire Me Button */}
            <a
              href="https://wa.me/201111159919?text=Hi%20Ahmed!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hire Ahmed Alkattan on WhatsApp"
              className="relative inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--primary-color)] border border-[var(--primary-color)] transition-all duration-300 hover:bg-transparent hover:text-[var(--primary-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black px-4 py-2 text-sm sm:text-base font-semibold text-white hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>



            {/* 🔸 Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className={`lg:hidden relative z-[999] transition-transform duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full p-2 text-3xl ${isMenuOpen ? "text-[var(--primary-color)] rotate-90" : "text-white"} hover:text-[var(--primary-color)]`}
            >
              {/* Inline SVG icons use currentColor so they follow text color */}
              {isMenuOpen ? (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              ) : (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 🔸 Mobile Menu */}
        <div
          id="mobile-nav"
          className={`lg:hidden fixed left-3 right-3 top-[80px] flex flex-col items-center gap-1 py-3 text-base font-semibold text-white
  transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
  bg-[#111]/95 backdrop-blur-2xl rounded-2xl border border-[#fc4100]/40 shadow-[0_0_25px_#fc410030]
  ${isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
            }`}
        >

          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              title={`Go to ${name} page`}
              aria-current={pathname === path ? "page" : undefined}
              className={`group relative px-4 py-1 hover:text-[var(--primary-color)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg ${pathname === path ? "text-[var(--primary-color)]" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[var(--primary-color)] transition-all duration-300 rounded-full w-0 group-hover:w-full`}
              ></span>
            </Link>
          ))}
        </div>
      </nav >
    </>
  );
}

export default memo(Nav);
