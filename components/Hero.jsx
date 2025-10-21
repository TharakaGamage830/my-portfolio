"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const Hero = () => {
  const roles = ['Software Engineer', 'Computer Science Student', 'Full Stack Developer', 'Graphic Designer'];
  const typedText = useTypingAnimation(roles);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Tharaka Gamage
        </motion.h1>
        
        <div className="h-12 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-cyan-400"
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-6"
        >
          <motion.a whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }} href="https://github.com/TharakaGamage830" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }} href="https://www.linkedin.com/in/tharakagamage71" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }} href="mailto:tharakaashen830@gmail.com">
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;