import React from "react";
import { motion } from "framer-motion";

/* single-card variants */
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectCard({ title, tech, img, live, repo }) {
  return (
    <motion.article
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="rounded-xl card-bg border border-white/6 p-4 overflow-hidden card-hover-glow"
      style={{ transition: "box-shadow 220ms ease, transform 180ms ease" }}
    >
      <div className="rounded-lg overflow-hidden bg-black/5 border border-white/4">
        <img src={img} alt={title} className="w-full h-44 object-cover" />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="text-sm text-white/70 mt-1">{tech}</div>

        <div className="mt-4 flex gap-3">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white text-sm shadow-neon-sm"
          >
            Live
          </a>

          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/90 text-sm bg-white/3"
          >
            Repo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
