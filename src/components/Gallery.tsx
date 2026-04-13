"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type GalleryCategory = "Engagement" | "Pre-Wedding" | "Family";

type GalleryImage = {
  src: string;
  alt: string;
};

const allImages: Record<GalleryCategory, GalleryImage[]> = {
  Engagement: [
    {
      src: "/Eng_1.png",
      alt: "The Beginning",
    },
    {
      src: "/Eng_2.png",
      alt: "Eternal Vows",
    },
    {
      src: "/Eng_3.png",
      alt: "Soft Details",
    },
  ],
  "Pre-Wedding": [
    {
      src: "/Pre_1.png",
      alt: "Groom's Style",
    },
    {
      src: "/Pre_2.png",
      alt: "Walking Together",
    },
    {
      src: "/Pre_3.png",
      alt: "Soft Details",
    },
  ],

  Family: [
    {
      src: "/Fam_1.png",
      alt: "Eternal Vows",
    },
    {
      src: "/Fam_2.png",
      alt: "Walking Together",
    },
    {
      src: "/Fam_3.png",
      alt: "Groom's Style",
    },
  ],
};

const galleryCategories: GalleryCategory[] = [
  "Engagement",
  "Pre-Wedding",
  "Family",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("Engagement");

  const images = allImages[activeCategory];

  return (
    <section
      id="gallery"
      className="relative py-32 bg-base px-6 overflow-hidden"
    >
      {/* Background Motifs */}
      <div className="absolute top-0 left-0 text-[15rem] text-primary/5 font-cinzel select-none pointer-events-none -translate-x-1/2 -translate-y-1/2">
        🕊️
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="font-cormorant italic text-accent tracking-[0.4em] text-sm uppercase mb-4">
            Capturing the Grace
          </span>
          <h2 className="font-cinzel text-4xl md:text-6xl text-white tracking-[0.1em]">
            Gallery of Blessings
          </h2>
          <div className="h-[1px] w-24 bg-accent/40 mt-8" />
        </div>

        {/* Category Buttons with Unique Styling */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`group relative px-8 py-3 font-cormorant text-lg tracking-widest transition-all duration-500 ${
                activeCategory === cat
                  ? "text-accent"
                  : "text-text-light hover:text-primary"
              }`}
            >
              {cat}
              <motion.div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-accent transition-all duration-500 ${
                  activeCategory === cat ? "w-1/2" : "w-0 group-hover:w-1/4"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Unique Stained Glass Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full auto-rows-[450px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl border border-accent/10 hover:border-accent/40 transition-colors shadow-lg ${
                index === 0
                  ? "md:col-span-8 md:row-span-2"
                  : index === 1
                    ? "md:col-span-4 md:row-span-1"
                    : "md:col-span-4 md:row-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                <p className="text-accent font-script text-3xl mb-2">
                  {img.alt}
                </p>
                <div className="h-px w-12 bg-accent/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
