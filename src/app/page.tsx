"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import StorySlider from "@/components/StorySlider";
import Events from "@/components/Events";
import Food from "@/components/Food";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import AudioToggle from "@/components/AudioToggle";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [startAudio, setStartAudio] = useState(false);

  // Disable scroll when intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  const handleEnter = () => {
    setShowIntro(false);
    setStartAudio(true);
  };

  return (
    <main className="relative bg-base min-h-screen">
      <AnimatePresence>
        {showIntro && <IntroScreen onEnter={handleEnter} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Hero />
        <Statement />
        <StorySlider />
        <Events />
        <Food />
        <Countdown />
        <Venue />
        <Gallery />
        <RSVP />
        <Footer />
        <AudioToggle startPlaying={startAudio} />
      </motion.div>
    </main>
  );
}
