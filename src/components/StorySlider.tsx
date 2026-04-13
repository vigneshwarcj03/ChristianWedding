"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    title: "Our First Meeting",
    caption:
      "A smile at a family function, the start of a beautiful journey together.",
    image: "/story111.jfif?v=1",
    year: "2020",
  },
  {
    title: "Growing Closer",
    caption: "Shared dreams and laughter made our bond stronger every day.",
    image: "/story222.jfif",
    year: "2022",
  },
  {
    title: "The Proposal",
    caption: "With blessings from family, he asked for her hand in marriage.",
    image: "/story333.jfif?v=1",
    year: "2024",
  },
  {
    title: "Joining Hands",
    caption: "With joyful hearts, we celebrate our wedding and new beginnings.",
    image: "/story444.jfif",
    year: "TODAY",
  },
];

export default function StorySlider() {
  return (
    <section id="story" className="bg-base py-32 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-32 relative z-10 text-center">
        <span className="font-cormorant italic text-accent tracking-[0.4em] text-sm uppercase mb-4">
          Our Journey in Grace
        </span>
        <h2 className="font-cinzel text-4xl md:text-6xl text-white tracking-[0.1em]">
          Our Love Story
        </h2>
        <div className="h-px w-24 bg-accent/40 mt-8" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0 hidden md:block" />

        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col mb-32 relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* TEXT */}
            <div className="w-full md:w-1/2 p-6 md:p-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-700" />

                <div className="relative">
                  <span className="font-cormorant italic text-accent text-2xl mb-4 block">
                    {story.year}
                  </span>

                  <h3 className="font-cinzel text-2xl text-white tracking-widest mb-6">
                    {story.title}
                  </h3>

                  <p className="font-cormorant text-xl text-text-light leading-relaxed italic opacity-90">
                    &ldquo;{story.caption}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
              <div className="relative group w-full">
                {/* Glow */}
                <div className="absolute -inset-2 bg-accent/20 blur-2xl opacity-40 group-hover:opacity-70 transition duration-700 rounded-[2rem]" />

                {/* Glass Frame */}
                <div className="relative border border-white/10 backdrop-blur-xl bg-white/5 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      quality={100}
                      priority={index === 0}
                      className="object-cover scale-110 group-hover:scale-125 
transition-all duration-[2000ms] ease-out 
grayscale contrast-125 brightness-90 
group-hover:grayscale-0 group-hover:contrast-110 group-hover:brightness-100"
                    />

                    {/* Dark cinematic gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Light reflection */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-base border-2 border-accent z-20 hidden md:block" />
          </motion.div>
        ))}
      </div>

      {/* Background Symbol */}
      <div className="absolute top-1/2 left-0 text-[20rem] text-primary/5 font-cinzel select-none pointer-events-none -translate-x-1/2">
        †
      </div>
    </section>
  );
}
