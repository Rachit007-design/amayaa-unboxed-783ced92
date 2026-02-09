import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoFrameProps {
  src: string;
  className?: string;
  showAudioToggle?: boolean;
  delay?: number;
}

const VideoFrame = ({ src, className = "", showAudioToggle = false, delay = 0 }: VideoFrameProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.23, 1, 0.32, 1] 
      }}
      className={`video-frame relative aspect-[9/16] bg-card ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover scale-[1.15]"
      />
      
      {showAudioToggle && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-3 rounded-full glass-card hover:bg-background/90 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-foreground" />
          )}
        </motion.button>
      )}
    </motion.div>
  );
};

export default VideoFrame;
