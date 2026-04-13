"use client";

import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section id="venue" className="relative bg-base py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="font-cinzel text-3xl md:text-5xl text-accent tracking-[0.2em] mb-8">
          Wedding Venue
        </h2>

        <p className="font-inter text-sm md:text-base text-text-dark/70 max-w-2xl leading-relaxed mb-12 italic">
          Join us for a beautifully curated celebration designed with a modern,
          interactive wedding experience. This venue sets the stage for an
          unforgettable day filled with joy, elegance, and celebration.
        </p>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2559813569587!2d80.24043309678954!3d13.082956599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d83442b1d3%3A0xd1c8ec109f5bf877!2sCSI%20LITE%20Auditorium!5e0!3m2!1sen!2sin!4v1775603296095!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{
              border: 0,
              filter: "grayscale(100%) contrast(125%)",
              transition: "filter 1s",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "grayscale(0%) contrast(100%)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "grayscale(100%) contrast(125%)")
            }
          />
        </motion.div>

        <p className="font-inter text-[10px] tracking-[0.4em] text-secondary uppercase italic">
          Easily accessible venue with ample space for celebration, gatherings,
          and unforgettable memories.
        </p>
      </div>
    </section>
  );
}
