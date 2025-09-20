import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-6 text-center">
        {/* animated neon heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 glow-about">About Me</h2>

        {/* outer frame (colorful blur) */}
        <div className="about-frame">
          {/* inner card (glass) */}
          <div className="about-card mx-auto">
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
              I’m <span className="font-bold text-white">Bhoomika Muppala</span>, a{" "}
              <span className="text-pink-400 font-semibold">Java Full Stack Web Developer</span>. I enjoy building responsive
              web applications and modern UI-driven experiences. My recent work focuses on full-stack projects built with
              React, Tailwind CSS, and Java-based backend services. I love solving problems, polishing UI interactions, and
              delivering projects that make a real impact.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div className="flex items-start gap-4">
                <div className="text-pink-400 text-xl">📍</div>
                <div>
                  <div className="text-sm text-white/70"><strong>Location:</strong></div>
                  <div className="text-white/80">India</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-yellow-400 text-xl">💡</div>
                <div>
                  <div className="text-sm text-white/70"><strong>Interests:</strong></div>
                  <div className="text-white/80">
                    Java Full Stack Web Development, React.js, Node.js, Tailwind CSS, UI/UX Design
                  </div>
                </div>
              </div>
            </div>
          </div> {/* /.about-card */}
        </div> {/* /.about-frame */}
      </div>
    </section>
  );
}
