"use client";

import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section
      id="statement"
      className="relative min-h-[70vh] flex flex-col items-center justify-center bg-base py-32 px-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20rem] text-accent/5 font-cinzel select-none pointer-events-none">
        †
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl text-center flex flex-col items-center relative z-0"
      >
        <div className="mb-12 flex flex-col items-center">
          {/* Top cross */}
          <div className="w-10 h-10 border border-accent/30 rounded-full flex items-center justify-center text-accent/60 mb-6">
            †
          </div>

          {/* Bible Image */}
          <img
            src="/bible.png"
            alt="Bible"
            className="w-82 h-82 object-contain mb-6 opacity-80"
          />

          {/* Vertical line */}
          <div className="h-12 w-px bg-accent/20" />
        </div>

        <blockquote className="font-cormorant italic text-3xl md:text-5xl lg:text-6xl text-white leading-relaxed md:leading-snug mb-16">
          &ldquo;And now these three remain: <br />
          <span className="text-accent">faith, hope and love.</span> <br />
          But the greatest of these is{" "}
          <span className="text-accent italic">love.</span>&rdquo;
        </blockquote>

        <div className="flex items-center space-x-6">
          <div className="h-px w-8 bg-accent/30" />
          <p className="font-inter text-xs md:text-sm tracking-[0.5em] text-accent uppercase opacity-80">
            1 Corinthians 13:13
          </p>
          <div className="h-px w-8 bg-accent/30" />
        </div>
      </motion.div>
    </section>
  );
}
