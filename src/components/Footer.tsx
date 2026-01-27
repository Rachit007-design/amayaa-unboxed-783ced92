import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import amayaaLogo from "@/assets/amayaa-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Statement */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={amayaaLogo} 
              alt="Amayaa Digital" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground tracking-wide">
              Future-Proof Creative.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/amayya.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Instagram
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              X / Twitter
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Amayaa Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
