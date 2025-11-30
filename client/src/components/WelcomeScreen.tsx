import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import welcomeVideo from "@assets/Black and Beige Minimalist Elegant Cosmetics Logo_1764510721873.mp4";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoEnded(true);
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3] dark:bg-[#1a1410] flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!videoEnded ? (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-screen flex items-center justify-center"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="max-w-full max-h-full object-contain"
              data-testid="welcome-video"
            >
              <source src={welcomeVideo} type="video/mp4" />
            </video>
            
            <AnimatePresence>
              {showButton && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                  <Button
                    onClick={handleSkip}
                    variant="outline"
                    className="bg-white/80 hover:bg-white border-none px-6"
                    data-testid="button-skip"
                  >
                    Skip
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-md p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A7D8" strokeWidth="2" opacity="0.5"/>
                  <path d="M50 15 C50 15 45 30 45 50 C45 70 50 85 50 85 C50 85 55 70 55 50 C55 30 50 15 50 15Z" fill="#C9A7D8" opacity="0.7"/>
                  <path d="M35 25 C35 25 30 40 30 55 C30 70 35 80 35 80" stroke="#D4A056" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M65 25 C65 25 70 40 70 55 C70 70 65 80 65 80" stroke="#D4A056" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-[#4A3F35] dark:text-[#E8DCC8] mb-4">
                Hello There
              </h1>
              <p className="text-[#6B5D4D] dark:text-[#A89B8B] text-lg mb-8">
                Welcome to your personal productivity space
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Button
                onClick={onGetStarted}
                size="lg"
                className="px-8 py-6 text-lg rounded-xl bg-[#C9A7D8] hover:bg-[#B894C7] text-white"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
