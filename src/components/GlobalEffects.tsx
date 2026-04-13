"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import PetalsBackground from "./PetalsBackground";

export default function GlobalEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Global Background Theme Elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-base">
        {/* Divine Light Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.08)_0%,transparent_70%)]" />

        {/* Global Stained Glass Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="global-stained-glass"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M60 0 L120 60 L60 120 L0 60 Z"
                  fill="none"
                  stroke="#c5a059"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#global-stained-glass)"
            />
          </svg>
        </div>
      </div>

      {/* Floating Floral Petals */}
      <PetalsBackground />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Cursor Glow */}
      <motion.div
        className="cursor-glow hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </>
  );
}
