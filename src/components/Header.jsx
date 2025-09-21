// src/components/Header.jsx
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // <-- mobile menu state

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
    textShadow: "0 0 6px rgba(255,99,165,0.55), 0 0 12px rgba(139,92,246,0.45)",
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

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded bg-white/6 hover:bg-white/10"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path
                className={`transition-transform duration-200 ${open ? "transform rotate-45 translate-y-0.5" : ""}`}
                d="M3 6h18M3 12h18M3 18h18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)} // clicking backdrop closes
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered menu panel */}
        <div
          className="relative container mx-auto px-6 py-8 flex justify-center"
          onClick={(e) => e.stopPropagation()} // avoid closing when interacting inside panel
        >
          <div className="w-full max-w-sm bg-[#0b1116]/95 backdrop-blur rounded-lg p-6 shadow-neon">
            <nav className="flex flex-col gap-4 text-center">
              <a href="#home" onClick={() => setOpen(false)} className="block py-2 text-lg">
                Home
              </a>
              <a href="#about" onClick={() => setOpen(false)} className="block py-2 text-lg">
                About
              </a>
              <a href="#skills" onClick={() => setOpen(false)} className="block py-2 text-lg">
                Skills
              </a>
              <a href="#projects" onClick={() => setOpen(false)} className="block py-2 text-lg">
                Projects
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="block py-2 text-lg">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
