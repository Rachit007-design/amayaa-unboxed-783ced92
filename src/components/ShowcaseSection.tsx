import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VideoFrame from "./VideoFrame";
import ScrollReveal from "./ScrollReveal";

const videos = [
{ src: "/videos/video-1.mp4", delay: 0 },
{ src: "/videos/video-2.mp4", delay: 0.05 },
{ src: "/videos/video-3.mp4", delay: 0.1 },
{ src: "/videos/video-4.mp4", delay: 0.15 },
{ src: "/videos/video-5.mp4", delay: 0.2 },
{ src: "/videos/video-6.mp4", delay: 0.25 }];


const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section id="showcase" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 texture-dots -z-10" />

      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              The Work
            </h2>
            <p className="headline-display text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto">Cinematic Content 
That Converts
            </p>
          </div>
        </ScrollReveal>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {videos.map((video, index) =>
          <ScrollReveal key={index} delay={video.delay} scale>
              <VideoFrame src={video.src} showAudioToggle delay={0} />
            </ScrollReveal>
          )}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16" />
        </ScrollReveal>
      </div>
    </section>);

};

export default ShowcaseSection;