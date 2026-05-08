"use client";
import React, { useState, useEffect } from "react";
import Image from "../image/Image";
import Link from "next/link";
import { paths } from "../../utility/paths";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { href: paths.homepage, label: "Home" },
    { href: paths.products, label: "Products" },
    { href: paths.about, label: "About" },
    { href: paths.contactUs, label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm"
            : "bg-white"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid rgba(25,89,54,0.08)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href={paths.homepage} className="flex-shrink-0 group">
              <div className="w-24 lg:w-28 transition-opacity duration-200 group-hover:opacity-75">
                <Image className="w-full" src="logo.png" alt="DETOPAGRO" type="logo" />
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      active
                        ? "text-green"
                        : "text-deep-green hover:text-green"
                    }`}
                    style={{
                      backgroundColor: active ? "rgba(25,89,54,0.06)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(25,89,54,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {label}
                    {active && (
                      <span
                        className="absolute inset-x-0 -bottom-px h-[2px] rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #195936, transparent)" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={paths.contactUs}
                className="px-5 py-2.5 bg-green text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-deep-green active:scale-95"
                style={{ boxShadow: "0 2px 8px rgba(25,89,54,0.25)" }}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpenNav(!openNav)}
              className="lg:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg transition-colors"
              style={{ backgroundColor: openNav ? "rgba(25,89,54,0.08)" : "transparent" }}
              aria-label="Toggle menu"
            >
              <span
                className="rounded-full transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  height: "1.5px",
                  backgroundColor: "#32492F",
                  transform: openNav ? "rotate(45deg) translateY(6.5px)" : "none",
                }}
              />
              <span
                className="rounded-full transition-all duration-300"
                style={{
                  width: "18px",
                  height: "1.5px",
                  backgroundColor: "#32492F",
                  opacity: openNav ? 0 : 1,
                  transform: openNav ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="rounded-full transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  height: "1.5px",
                  backgroundColor: "#32492F",
                  transform: openNav ? "rotate(-45deg) translateY(-6.5px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          openNav ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundColor: openNav ? "rgba(13,31,21,0.45)" : "rgba(13,31,21,0)",
            backdropFilter: "blur(3px)",
          }}
          onClick={() => setOpenNav(false)}
        />

        {/* Drawer panel */}
        <div
          className="absolute right-0 top-0 bottom-0 bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out"
          style={{
            width: "min(280px, 85vw)",
            transform: openNav ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
            <Image className="w-20" src="logo.png" alt="DETOPAGRO" type="logo" />
            <button
              onClick={() => setOpenNav(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors text-gray-400 hover:text-gray-600"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#f3f4f6")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")
              }
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
            {navLinks.map(({ href, label }, i) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpenNav(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-[0.9375rem] font-medium transition-all duration-200"
                  style={{
                    transitionDelay: openNav ? `${i * 40 + 60}ms` : "0ms",
                    backgroundColor: active ? "#195936" : "transparent",
                    color: active ? "#ffffff" : "#32492F",
                    opacity: openNav ? 1 : 0,
                    transform: openNav ? "translateX(0)" : "translateX(12px)",
                  }}
                >
                  {label}
                  {active && (
                    <svg
                      className="ml-auto w-4 h-4 opacity-60"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 12l4-4-4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="px-4 pb-8">
            <Link
              href={paths.contactUs}
              onClick={() => setOpenNav(false)}
              className="flex items-center justify-center w-full px-5 py-3.5 text-white font-semibold rounded-xl text-sm transition-all duration-200 active:scale-95"
              style={{ backgroundColor: "#195936" }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
