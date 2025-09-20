import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import portrait from "../assets/bhoomipic.png";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const heading = { hidden: { opacity: 0, y: 20, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } } };
const sub = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const buttons = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const portraitVar = { hidden: { opacity: 0, scale: 0.95, y: 8 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } } };

export default function Hero() {
  return (
    <section id="home" className="py-16">
      <motion.div
        className="container mx-auto px-6 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* portrait */}
        <motion.div
          variants={portraitVar}
          className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-400 shadow-strong animate-float-slow"
        >
          <img src={portrait} alt="Bhoomika" className="w-full h-full object-cover" />
        </motion.div>

        {/* heading */}
        <motion.h1
          variants={heading}
          className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight neon-text text-center"
        >
          Hi — I’m{" "}
          <motion.span
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-purple-400 drop-glow"
          >
            Bhoomika Muppala
          </motion.span>
          .
        </motion.h1>

        {/* subtitle */}
        <motion.p variants={sub} className="mt-4 text-lg text-gray-200 max-w-2xl text-center">
          Java Full Stack Web Developer • Passionate about building responsive web apps and UI-driven experiences.
        </motion.p>

        {/* buttons */}
        <motion.div variants={buttons} className="mt-8 flex gap-6">
          {/* Resume: BRIGHT glowing gradient */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400
              shadow-[0_0_25px_rgba(236,72,153,0.9)]
              hover:shadow-[0_0_45px_rgba(236,72,153,1),0_0_60px_rgba(56,189,248,0.8)]
              transition-all duration-300"
          >
            Download Resume
          </motion.a>

          {/* Contact: glassy + glow */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-lg font-semibold text-white/90
              bg-white/10 backdrop-blur-md border border-white/20
              hover:bg-white/20 hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]
              transition-all duration-300"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* social icons */}
        <motion.div variants={buttons} className="mt-8 flex gap-8">
          <motion.a
            href="https://www.linkedin.com/in/bhoomika-muppala-41a24a318"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-blue-400 hover:text-blue-500 transition drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_24px_rgba(59,130,246,1)]"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/bhoomika-muppala"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-300 hover:text-white transition drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_24px_rgba(255,255,255,1)]"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
