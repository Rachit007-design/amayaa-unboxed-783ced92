import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VideoFrame from "./VideoFrame";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="section-container w-full">

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Video Frame - Hidden on mobile */}
          <div className="hidden lg:block w-[240px] xl:w-[280px]">
            <VideoFrame src="/videos/video-1.mp4" delay={0.2} showAudioToggle />
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center max-w-2xl px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-6">

              AI-Powered Creative Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="headline-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">

              AI-Driven Content
              <br />
              <span className="text-muted-foreground">That Scales
Brands</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-light text-muted-foreground text-lg md:text-xl max-w-lg mb-10">

              We craft cinematic, conversion-driven content that transforms brands into cultural movements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4">

              <motion.a
                href="#showcase"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-pill">

                View the Work
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-pill-outline">

                See Pricing
              </motion.a>
            </motion.div>
          </div>

          {/* Right Video Frame */}
          <div className="w-[200px] sm:w-[240px] lg:w-[240px] xl:w-[280px] mt-8 lg:mt-0">
            <VideoFrame src="/videos/video-2.mp4" delay={0.3} showAudioToggle />
          </div>
        </div>
      </motion.div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>);

};

export default HeroSection;