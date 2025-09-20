import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main content with top padding to prevent overlap */}
      <main className="container mx-auto px-6 pt-20 md:pt-24">
        {/* Hero Section */}
        <section id="home" className="py-16 scroll-mt-24">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-24">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-24">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-24">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-24">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
