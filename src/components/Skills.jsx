import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";

const skills = [
  { name: "HTML", level: "Advanced", percent: 95, icons: <FaHtml5 /> },
  { name: "CSS / Tailwind", level: "Advanced", percent: 90, icons: <FaCss3Alt /> },
  {
    name: "JavaScript / React",
    level: "Intermediate",
    percent: 75,
    // show JS + React together
    icons: (
      <div className="flex items-center gap-1">
        <FaJsSquare />
        <FaReact />
      </div>
    ),
  },
  { name: "Java (OOP)", level: "Intermediate", percent: 70, icons: <FaJava /> },
  { name: "Node.js", level: "Intermediate", percent: 65, icons: <FaNodeJs /> },
  { name: "UI / UX Design", level: "Interest", percent: 50, icons: <GiPaintBrush /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-6">
        {/* 🔥 Title with blue neon glow */}
        <h2 className="text-4xl font-extrabold mb-8 text-center skills-title">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              className="p-6 rounded-xl card-bg relative hover:shadow-skill transition-shadow"
              whileHover={{ translateY: -6 }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg md:text-xl font-semibold text-white">{s.name}</div>
                  <div className="text-sm text-white/60 mt-1">{s.level}</div>
                </div>

                <div className="ml-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/80 icon-badge">
                    {s.icons}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                {/* track */}
                <div className="h-2 rounded-full bg-white/6 overflow-hidden">
                  {/* animated fill */}
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percent}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    style={{
                      background:
                        "linear-gradient(90deg, #ff6aa2 0%, #c86dd7 45%, #3dd3e3 100%)",
                      boxShadow: "0 6px 18px rgba(200,100,220,0.12)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
