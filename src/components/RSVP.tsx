"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import Particles from "@tsparticles/react";

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("❤️");

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // 🎊 Continuous Confetti (like your first code)
  const fireConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const colors = ["#D4AF37", "#ffffff", "#ff69b4"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // fake delay for better UX
    await new Promise((r) => setTimeout(r, 1000));

    fireConfetti();

    setIsSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="rsvp" className="relative py-32 bg-base px-6 overflow-hidden">
      {/* 🎆 FIREWORK BACKGROUND AFTER SUBMIT */}
      {isSubmitted && (
        <Particles
          className="absolute inset-0 z-0"
          options={{
            particles: {
              number: { value: 0 },
              color: { value: "#FFD700" },
              size: { value: 3 },
              move: {
                enable: true,
                speed: 6,
                outModes: "destroy",
              },
            },
            emitters: {
              direction: "top",
              rate: { delay: 0.2, quantity: 5 },
              position: { x: 50, y: 100 },
            },
          }}
        />
      )}

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 text-[15rem] text-primary/5 font-cinzel select-none pointer-events-none translate-x-1/2 -translate-y-1/2">
        †
      </div>

      <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-cormorant italic text-accent tracking-[0.4em] text-sm uppercase mb-4">
            A Blessing for Us
          </span>

          <h2 className="font-cinzel text-4xl md:text-6xl text-white tracking-[0.1em]">
            Leave a Message
          </h2>

          <div className="h-px w-24 bg-accent/40 mt-8" />
        </div>

        {/* FORM / SUCCESS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full bg-surface p-6 md:p-4 rounded-[4rem] shadow-2xl text-white relative overflow-hidden border border-accent/10"
        >
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col space-y-8 md:space-y-12"
            >
              {/* NAME */}
              <div className="space-y-6">
                <label className="font-cormorant italic text-accent text-xl tracking-widest block">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="The name of the blessed.."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-accent/30 py-4 font-cormorant text-xl outline-none focus:border-accent transition-colors placeholder:text-white/20"
                />
              </div>

              {/* EMOJI */}
              <div className="flex flex-col items-center space-y-6">
                <span className="font-cormorant italic text-accent/60 text-sm tracking-widest">
                  Share a Reaction
                </span>

                <div className="flex justify-center space-x-6 md:space-x-10 text-3xl md:text-4xl">
                  {["❤️", "🥳", "🥂"].map((emoji) => (
                    <motion.button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      className={`transition-all duration-300 ${
                        selectedEmoji === emoji ? "scale-125" : "opacity-60"
                      }`}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-6">
                <label className="font-cormorant italic text-accent text-xl tracking-widest block">
                  Your Message
                </label>

                <textarea
                  required
                  rows={4}
                  placeholder="A prayer, a wish, a word of love.."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border border-accent/20 rounded-[2rem] p-5 md:p-8 font-cormorant text-xl outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none leading-relaxed"
                />
              </div>

              {/* SUBMIT */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                className="w-full py-6 bg-accent text-primary rounded-full font-cinzel text-xs tracking-[0.4em] shadow-xl hover:bg-white transition-all duration-500 uppercase"
              >
                {loading ? "Sending..." : "Send Blessings"}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-center py-12 space-y-6"
            >
              <span className="text-7xl block">😻</span>

              <h3 className="font-script text-5xl text-accent">
                Thank You, {formData.name}
              </h3>

              <p className="font-cormorant italic text-2xl text-white/80 tracking-widest">
                Your beautiful wishes have been received in grace.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
