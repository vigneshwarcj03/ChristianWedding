"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("June 21, 2026 16:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative py-32 bg-base flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Background Motifs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] text-primary/5 font-cinzel select-none pointer-events-none">
        †
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center w-full px-6 relative z-10 flex flex-col items-center"
      >
        <span className="font-cormorant italic text-accent tracking-[0.4em] text-sm uppercase mb-4">
          The Sacred Hour
        </span>
        <h3 className="font-cinzel text-white text-3xl md:text-5xl tracking-[0.2em] mb-12 uppercase">
          Counting Down
        </h3>

        <p className="font-cormorant italic text-xl text-text-light mb-16 tracking-widest">
          June 21st, 2026 • 4:00 PM • St. Mary&apos;s Cathedral
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-32 md:w-32 md:h-40 rounded-[2rem] bg-primary flex items-center justify-center shadow-2xl border border-accent/20 group-hover:border-accent transition-colors relative overflow-hidden">
                {/* Subtle Stained Glass Background */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#stained-glass)"
                      className="text-accent"
                    />
                  </svg>
                </div>
                <span className="font-cinzel text-4xl md:text-6xl text-accent tabular-nums relative z-10">
                  {item.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="font-inter text-[10px] tracking-[0.5em] text-accent font-bold uppercase mt-6 opacity-60">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-cormorant italic text-2xl text-text-light mt-20 max-w-xl mx-auto leading-relaxed opacity-80">
          &ldquo;Be joyful in hope, patient in affliction, faithful in
          prayer.&rdquo;
          <br />
          <span className="text-xs tracking-[0.3em] uppercase mt-4 block opacity-40">
            — Romans 12:12
          </span>
        </p>

        <div className="h-px w-24 bg-accent/20 mt-16 mx-auto" />
      </motion.div>
    </section>
  );
}
