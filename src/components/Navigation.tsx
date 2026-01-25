import { motion } from "framer-motion";
import amayaaLogo from "@/assets/amayaa-logo.png";

const Navigation = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={amayaaLogo} 
            alt="Amayaa Digital" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-pill text-sm tracking-wide"
        >
          Get Started
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Navigation;
