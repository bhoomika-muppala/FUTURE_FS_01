import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import p1 from "../assets/ecostride.png";
import p2 from "../assets/mini-store.png";
import p3 from "../assets/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Ecostride (Rebrand)",
    tech: "React, Tailwind",
    img: p1,
    live: "https://future-fs-03-xi.vercel.app/",
    repo: "https://github.com/bhoomika-muppala/FUTURE_FS_03",
  },
  {
    id: 2,
    title: "Mini Store UI",
    tech: "React, Components",
    img: p2,
    live: "https://bhoomika-store.netlify.app/",
    repo: "https://github.com/bhoomika-muppala/FUTURE_FS_02",
  },
  {
    id: 3,
    title: "Personal Portfolio (This Site)",
    tech: "Vite, React, Tailwind",
    img: p3,
    live: "https://bhoomikamuppala.vercel.app",
    repo: "https://github.com/bhoomika-muppala/FUTURE_FS_01",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.08,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center neon-solid">
          Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
