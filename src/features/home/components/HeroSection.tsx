import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMAGES = [
  "https://ambition.com.np/wp-content/uploads/2025/03/Screenshot-2025-03-26-130410.png",
  "https://ambition.com.np/wp-content/uploads/2025/03/Screenshot-2025-03-26-130507.png",
  "https://ambition.com.np/wp-content/uploads/2025/03/Capture.png",
  "https://ambition.com.np/wp-content/uploads/2025/03/Screenshot-2025-03-26-130439.png",
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-6 px-4 sm:px-8 overflow-hidden ">
      {/* SVG ClipPath Definition (Curved boundary line) */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="customCurveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.35,0 C 0.30,0.18 0.22,0.32 0.25,0.48 C 0.28,0.64 0.15,0.85 0,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Left Column Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-20 max-w-xl  text-left"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          Empowering Skills, <br />
          Building Bright <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Futures
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
          Join ATI and take the next step towards a successful career. Quality
          education, practical training, and a supportive environment to help
          you achieve your goals.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => navigate("/admission-form")}
            className="px-8 py-3.5 rounded-full font-semibold text-primary-foreground bg-gradient-primary shadow-glow flex items-center gap-2 cursor-pointer transition-all duration-300"
          >
            Admissions Open
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="px-8 py-3.5 rounded-full font-medium text-foreground bg-secondary hover:bg-secondary/80 border border-border backdrop-blur-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            Recent Updates
            <PlayCircle className="w-4 h-4 text-accent" />
          </motion.button>
        </div>
      </motion.div>

      {/* Right Column: Dynamic Masked Image Carousel */}
      <div className="w-full lg:w-[65%] h-[450px] sm:h-[550px] lg:h-[650px] absolute right-0 top-0 bottom-0 z-10 pointer-events-none lg:pointer-events-auto">
        <div className="relative w-full h-full overflow-hidden rounded-3xl">
          {/* Subtle glow background */}
          <motion.div
            key={`glow-${currentImageIndex}`}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.6, 0.3] }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 blur-md rounded-3xl bg-gradient-hero opacity-30"
            style={{ clipPath: "url(#customCurveClip)" }}
          />

          {/* Masked Image Frame */}
          <div
            className="w-full h-full relative rounded-3xl overflow-hidden"
            style={{ clipPath: "url(#customCurveClip)" }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={IMAGES[currentImageIndex]}
                alt="Institute Training Class"
                initial={{ opacity: 0, scale: 1.15, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-r-3xl"
              />
            </AnimatePresence>
          </div>

          {/* Animated Curve Boundary Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 35,0 C 30,18 22,32 25,48 C 28,64 15,85 0,100"
              fill="none"
              stroke="url(#educationThemeGradient)"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              key={`stroke-pulse-${currentImageIndex}`}
              d="M 35,0 C 30,18 22,32 25,48 C 28,64 15,85 0,100"
              fill="none"
              stroke="hsl(var(--primary-glow))"
              strokeWidth="0.5"
              initial={{ opacity: 0.8, pathLength: 0 }}
              animate={{ opacity: 0, pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <defs>
              <linearGradient
                id="educationThemeGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="hsl(245, 80%, 60%)" />
                <stop offset="50%" stopColor="hsl(268, 88%, 68%)" />
                <stop offset="100%" stopColor="hsl(290, 80%, 68%)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Carousel Dots */}
          <div className="absolute bottom-6 right-12 z-30 flex gap-2">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentImageIndex
                    ? "w-6 bg-primary shadow-glow"
                    : "w-2 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
