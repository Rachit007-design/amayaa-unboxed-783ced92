import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VideoFrame from "./VideoFrame";
const videos = [{
  src: "/videos/video-1.mp4",
  delay: 0
}, {
  src: "/videos/video-2.mp4",
  delay: 0.1
}, {
  src: "/videos/video-3.mp4",
  delay: 0.2
}, {
  src: "/videos/video-4.mp4",
  delay: 0.3
}, {
  src: "/videos/video-5.mp4",
  delay: 0.4
}, {
  src: "/videos/video-6.mp4",
  delay: 0.5
}];
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });
  return <section id="showcase" ref={sectionRef} className="py-32 grain-overlay">
      <div className="section-container">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }} className="text-center mb-16">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            The Work
          </h2>
          <p className="headline-display text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto">
            Cinematic Content That Converts
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {videos.map((video, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: video.delay,
          ease: [0.23, 1, 0.32, 1]
        }}>
              <VideoFrame src={video.src} showAudioToggle delay={0} />
            </motion.div>)}
        </div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }} className="text-center mt-16">
          
        </motion.div>
      </div>
    </section>;
};
export default ShowcaseSection;