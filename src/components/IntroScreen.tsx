"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [sparkles, setSparkles] = useState<
    { left: string; top: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generatedSparkles = [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.2,
      duration: 3 + (i % 5),
    }));
    setSparkles(generatedSparkles);
  }, []);

  const handleEnter = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      onEnter();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-primary overflow-hidden"
        >
          {/* Celestial Sparkles Background */}
          <div className="absolute inset-0 z-0">
            {sparkles.map((sparkle, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: sparkle.duration,
                  repeat: Infinity,
                  delay: sparkle.delay,
                }}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  left: sparkle.left,
                  top: sparkle.top,
                }}
              />
            ))}
          </div>

          {/* Background layered curtains (opening effect) */}
          <motion.div
            animate={{ x: isOpening ? "-100%" : "0%" }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 bg-primary z-50 border-r border-accent/10 shadow-2xl flex items-center justify-end overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#global-stained-glass)"
                />
              </svg>
            </div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent relative z-10" />
          </motion.div>

          <motion.div
            animate={{ x: isOpening ? "100%" : "0%" }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-primary z-50 border-l border-accent/10 shadow-2xl flex items-center justify-start overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#global-stained-glass)"
                />
              </svg>
            </div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent relative z-10" />
          </motion.div>

          <div className="relative z-[60] flex flex-col items-center">
            {/* Couple Photo Frame - Hexagonal or Diamond for uniqueness */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-48 h-64 md:w-64 md:h-80 rounded-[4rem] border border-accent/30 overflow-hidden mb-12 shadow-[0_0_50px_rgba(197,160,89,0.1)] relative group"
            >
              <Image
                src="/IntroScreen.png"
                alt="Daniel & Cassie"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
            </motion.div>
            {/* Logo initials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mb-8 text-center"
            >
              <h2 className="font-script text-5xl md:text-7xl text-accent">
                Daniel{" "}
                <span className="font-cormorant italic text-3xl mx-2">&</span>{" "}
                Cassie
              </h2>
            </motion.div>
            {/* Subtext and Button */}
            {/* Top Center Head Image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mb-4"
            >
              <Image
                src="/IntroHead.png?v=4"
                alt="Intro Head"
                width={140}
                height={140}
                className="object-contain mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="text-center"
            >
              <p className="font-cormorant italic text-xl md:text-2xl text-accent/80 tracking-widest mb-12">
                A Divine Union
              </p>

              <motion.button
                onClick={handleEnter}
                whileTap={{ scale: 0.94 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  boxShadow: [
                    "0 0 0px rgba(197,160,89,0.2)",
                    "0 0 25px rgba(197,160,89,0.5)",
                    "0 0 0px rgba(197,160,89,0.2)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative px-12 py-4 overflow-hidden border border-accent/40 text-accent rounded-full"
              >
                {/* shimmer sweep */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
                  }}
                />

                {/* tap ripple (mobile feel) */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-accent/40"
                  initial={{ scale: 0, opacity: 0.6 }}
                  whileTap={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />

                {/* text */}
                <span className="relative z-10 font-cinzel text-xs uppercase tracking-[0.4em]">
                  Witness Our Vows
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
