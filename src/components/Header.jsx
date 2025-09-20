// src/components/Header.jsx
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // inline style for gradient text + glow (Tailwind can't do text-shadow or text-clip easily)
  const brandStyle = {
    background: "linear-gradient(90deg,#ff63a5,#8b5cf6,#34d3e6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    textShadow:
      "0 0 6px rgba(255,99,165,0.55), 0 0 12px rgba(139,92,246,0.45)",
    transition: "text-shadow .35s ease, transform .18s ease"
  };

  const brandStyleSmall = {
    ...brandStyle,
    transform: "scale(0.96)"
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md " +
        /* translucent purple that blends with page */
        "bg-[rgba(109,40,217,0.82)] shadow-[0_6px_18px_rgba(0,0,0,0.35)] " +
        /* padding toggles with scroll */
        (scrolled ? "py-2" : "py-4")
      }
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <h1
          className="font-extrabold text-lg md:text-xl select-none"
          style={scrolled ? brandStyleSmall : brandStyle}
        >
          Bhoomika Muppala
        </h1>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-8 text-sm md:text-base items-center">
          <a className="nav-link text-white/95 hover:text-[#ff63a5] transition" href="#home">
            Home
          </a>
          <a className="nav-link text-white/95 hover:text-[#ff63a5] transition" href="#about">
            About
          </a>
          <a className="nav-link text-white/95 hover:text-[#4da6ff] transition" href="#skills">
            Skills
          </a>
          <a className="nav-link text-white/95 hover:text-[#a64dff] transition" href="#projects">
            Projects
          </a>
          <a className="nav-link text-white/95 hover:text-[#20e0d2] transition" href="#contact">
            Contact
          </a>
        </nav>

        {/* Mobile hamburger (placeholder) */}
        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded bg-white/6 hover:bg-white/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
