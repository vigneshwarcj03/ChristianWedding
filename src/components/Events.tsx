"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const eventDetails = [
  {
    title: "Join Us for the Celebration",
    items: [
      {
        name: "CHURCH WEDDING CEREMONY",
        time: "5:00 PM",
        venue: "Church",
        image: "/CHURCH.png",
      },
      {
        name: "RECEPTION AT CSI AUDITORIUM",
        time: "7:00 PM",
        venue: "CSI Auditorium",
        image: "/RECEPTION.png",
      },
      {
        name: "LIVE CHRISTIAN MUSIC BAND",
        description:
          "Experience joyful and spirit-filled live Christian music celebrating love and unity.",
        image: "/BAND.png",
      },
    ],
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative bg-base py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Decorative Cross Background */}
      <div className="absolute top-0 right-0 text-[30rem] text-primary/5 font-cinzel select-none pointer-events-none -translate-y-1/4 translate-x-1/4">
        †
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="font-cormorant italic text-accent tracking-[0.4em] text-sm uppercase mb-4">
            The Holy Celebration
          </span>
          <h2 className="font-cinzel text-4xl md:text-6xl text-white tracking-[0.1em]">
            Wedding Itinerary
          </h2>
          <div className="h-[1px] w-24 bg-accent/40 mt-8" />
        </div>

        {eventDetails.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-40">
            {/* Section Title */}
            <div className="flex items-center space-x-8 mb-16">
              <h3 className="font-cormorant text-2xl md:text-3xl text-accent italic whitespace-nowrap">
                {group.title}
              </h3>
              <div className="h-px w-full bg-accent/20" />
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {group.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: itemIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] mb-10 overflow-hidden rounded-[3rem] border border-accent/20 group-hover:border-accent/50 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="px-4">
                    <h4 className="font-cinzel text-xl text-white tracking-widest mb-4 group-hover:text-accent transition-colors">
                      {item.name}
                    </h4>

                    {item.time && (
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="font-cormorant italic text-accent text-lg">
                          {item.time}
                        </span>
                      </div>
                    )}

                    {item.venue && (
                      <p className="font-inter text-[10px] tracking-[0.3em] text-text-light uppercase mb-4">
                        {item.venue}
                      </p>
                    )}

                    {item.description && (
                      <p className="font-cormorant text-lg text-text-light leading-relaxed italic opacity-80">
                        &ldquo;{item.description}&rdquo;
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
