"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const petalVariants = [
  "/rose-petal.png",
  "/rose-petal-1.png",
  "/rose-petal-2.png",
  "/rose-petal-3.png",
  "/rose-petal-4.png",
  "/rose-petal-5.png",
  "/rose-petal-6.png",
  "/rose-petal-7.png",
];

export default function PetalsBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { bgPetals, fgPetals } = useMemo(() => {
    const bgCount = isMobile ? 10 : 18;
    const fgCount = isMobile ? 6 : 12;

    const randomPetal = () => {
      const src =
        petalVariants[Math.floor(Math.random() * petalVariants.length)];
      const left = Math.random() * 100;
      const rotate = Math.random() * 180;
      const duration = 14 + Math.random() * 6;
      const delay = Math.random() * 6;

      return { src, left, rotate, duration, delay };
    };

    return {
      bgPetals: Array.from({ length: bgCount }, (_, i) => ({
        ...randomPetal(),
        key: `bg-${i}`,
      })),
      fgPetals: Array.from({ length: fgCount }, (_, i) => ({
        ...randomPetal(),
        key: `fg-${i}`,
        duration: 10 + Math.random() * 5,
        delay: Math.random() * 5,
      })),
    };
  }, [isMobile]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bgPetals.map(({ key, src, left, rotate, duration, delay }) => (
        <motion.img
          key={key}
          src={src}
          className="absolute w-3 sm:w-4 md:w-5 opacity-50 blur-[1px] pointer-events-none"
          style={{ left: `${left}vw`, top: "-10vh" }}
          initial={{ y: -150, rotate }}
          animate={{ y: "120vh", x: [0, 30, -25, 15, 0], rotate: 360 }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
            delay,
          }}
        />
      ))}

      {fgPetals.map(({ key, src, left, rotate, duration, delay }) => (
        <motion.img
          key={key}
          src={src}
          className="absolute w-4 sm:w-5 md:w-6 pointer-events-none"
          style={{ left: `${left}vw`, top: "-10vh" }}
          initial={{ y: -150, rotate, opacity: 0.95 }}
          animate={{ y: "120vh", x: [0, 50, -40, 20, 0], rotate: 360 }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
            delay,
          }}
        />
      ))}
    </div>
  );
}
