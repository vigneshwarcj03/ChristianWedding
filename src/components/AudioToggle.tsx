"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AudioToggleProps {
  startPlaying: boolean;
}

export default function AudioToggle({ startPlaying }: AudioToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (startPlaying && audioRef.current && audioLoaded) {
      audioRef.current.play().catch((err) => {
        console.error("Failed to play audio:", err);
        setAudioError(err.message);
      });
      setIsPlaying(true);
    }
  }, [startPlaying, audioLoaded]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Failed to play audio:", err);
          setAudioError(err.message);
        });
        setIsPlaying(true);
      }
    }
  };

  const handleCanPlay = () => {
    setAudioLoaded(true);
    setAudioError(null);
    console.log("Audio file loaded successfully");
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const error = e.currentTarget.error;
    const errorMsg = error
      ? `Audio Error Code: ${error.code}`
      : "Unknown audio error";
    console.error("Audio error:", errorMsg);
    setAudioError(errorMsg);
    setAudioLoaded(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors shadow-lg"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="pause"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Pause size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Play size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Audio Element (Hidden) */}
      {/* Primary source: static file | Fallback: API route */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        crossOrigin="anonymous"
        onCanPlay={handleCanPlay}
        onError={handleError}
      >
        <source src="/wedding-theme.mp3" type="audio/mpeg" />
        <source src="/api/audio/wedding-theme" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
