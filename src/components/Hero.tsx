"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, useMemo } from "react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const nameHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    rotate: [0, 2, -2, 0],
    transition: { repeat: Infinity, duration: 4 },
  },
};

const bottomCrossVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0.2,
    y: 0,
    transition: { delay: 2, duration: 1.5 },
  },
};

// ---------------- HERO ----------------
export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const particles = useMemo(
    () => [
      { top: 75.69, left: 96.74 },
      { top: 51.73, left: 84.72 },
      { top: 57.8, left: 19.91 },
      { top: 3.15, left: 10.67 },
      { top: 67.71, left: 64.09 },
      { top: 69.95, left: 60.01 },
      { top: 90.94, left: 39.39 },
      { top: 66.14, left: 37.48 },
      { top: 26.68, left: 57.95 },
      { top: 29.55, left: 44.29 },
      { top: 71.89, left: 84.77 },
      { top: 88.26, left: 24.36 },
      { top: 99.17, left: 99.23 },
      { top: 82.73, left: 25.94 },
      { top: 63.37, left: 11.23 },
    ],
    [],
  );

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative z-20 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 md:pt-20"
    >
      {/* 🌟 Radial Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15),transparent_60%)] pointer-events-none" />

      {/* 🎀 Top Left Ribbon */}
      <motion.div
        className="absolute top-5 -left-2 z-[50] pointer-events-none"
        initial={{ rotate: -19, scale: 0.9 }}
        animate={{ rotate: [-8, -5, -8], y: [0, 6, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/TOP.png"
          alt="Decorative ribbon"
          width={400}
          height={400}
          className="w-[120px] sm:w-[160px] md:w-[200px] h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent blur-md opacity-60" />
      </motion.div>

      {/* ✨ Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/60 rounded-full z-0"
          style={{ top: `${p.top}%`, left: `${p.left}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="font-cormorant italic text-accent tracking-[0.6em] text-sm uppercase mb-12"
        >
          A Divine Covenant
        </motion.span>

        <motion.h1
          className="font-script text-6xl md:text-8xl text-accent mb-4"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={nameHover}
        >
          Daniel
        </motion.h1>

        {/* 💫 Couple */}
        <motion.div
          variants={itemVariants}
          className="my-6 flex justify-center relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Image
            src="/couples.png?v=1"
            alt="Daniel and Cassie"
            width={220}
            height={220}
            className="object-contain relative z-10 drop-shadow-[0_0_25px_rgba(197,160,89,0.3)]"
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 my-2"
        >
          <div className="h-px w-12 bg-accent/40" />
          <span className="text-accent text-xl">✦</span>
          <div className="h-px w-12 bg-accent/40" />
        </motion.div>

        <motion.h1
          className="font-script text-6xl md:text-8xl text-accent mt-4"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={nameHover}
        >
          Cassie
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center max-w-lg"
        >
          <p className="font-cormorant text-lg md:text-xl text-white/80 tracking-[0.15em] leading-relaxed mb-12">
            Together with their families, they invite you to witness the joining
            of their lives in Christ
          </p>

          {/* 📅 Date Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              boxShadow: [
                "0 0 10px rgba(255,255,255,0.1)",
                "0 0 30px rgba(197,160,89,0.4)",
                "0 0 10px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative flex flex-col items-center space-y-3 px-8 py-6 border border-accent/20 rounded-2xl backdrop-blur-sm"
          >
            <p className="font-cinzel text-xl md:text-2xl tracking-[0.3em] text-accent">
              JUNE 21 • 2026
            </p>
            <div className="h-px w-8 bg-accent/40" />
            <p className="font-inter text-[10px] tracking-[0.5em] text-accent/60 uppercase">
              CSI AUDITORIUM • CHENNAI
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Cross */}
      <motion.div
        variants={bottomCrossVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-12 inset-x-0 flex flex-col items-center z-10 pointer-events-none"
      >
        <div className="h-16 w-px bg-accent/40" />
        <div className="w-8 h-px bg-accent/40 -mt-8" />
      </motion.div>
    </section>
  );
}
