import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 mt-12 bg-[#0b0f1a]">
      <div className="container mx-auto px-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Bhoomika Muppala •
        <a href="https://github.com/bhoomika-muppala" target="_blank" rel="noreferrer" className="mx-2 underline">GitHub</a>•
        <a href="https://www.linkedin.com/in/bhoomika-muppala-41a24a318" target="_blank" rel="noreferrer" className="ml-2 underline">LinkedIn</a>
      </div>
    </footer>
  );
}
