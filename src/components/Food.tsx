"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Food() {
  return (
    <section
      id="food"
      className="relative bg-base py-20 md:py-32 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-20">
          <span className="font-cormorant italic text-accent tracking-[0.4em] text-sm uppercase mb-4 block">
            With Love & Gratitude
          </span>
          <h2 className="font-cinzel text-4xl md:text-6xl text-white tracking-[0.1em]">
            Wedding Feast
          </h2>
          <div className="h-[1px] w-24 bg-accent/40 mt-8 mx-auto" />
        </div>

        {/* Image Only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/Food.png"
            alt="Wedding Feast"
            width={800} // control size here
            height={500}
            className="object-contain mx-auto"
            priority
          />
        </motion.div>

        {/* Optional Text */}
        <div className="mt-10 px-4">
          <p className="font-cormorant text-lg text-text-light italic opacity-80">
            &ldquo;Enjoy a delightful feast prepared with love for all our dear
            guests.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
