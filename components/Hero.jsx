"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = ['Software Engineer', 'Computer Science Student', 'Full Stack Developer', 'Graphic Designer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spaceshipTrail, setSpaceshipTrail] = useState([]);
  const [imageOpacity, setImageOpacity] = useState(0.5);
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Fix hydration by only rendering random elements after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Mouse tracking and spaceship trail
  useEffect(() => {
    let trailCounter = 0;
    
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY, id: `${Date.now()}-${trailCounter++}` };
      setMousePos(newPos);
      
      setSpaceshipTrail(prev => {
        const updated = [...prev, newPos].slice(-15);
        return updated;
      });

      // Adjust image opacity based on mouse position
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const isRightSide = e.clientX > windowWidth / 2;
      const isNotTop = e.clientY > windowHeight * 0.3;
      
      if (isRightSide && isNotTop) {
        setImageOpacity(0.2);
      } else {
        setImageOpacity(0.5);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clear old trail points
    const interval = setInterval(() => {
      setSpaceshipTrail(prev => prev.filter(point => {
        const timestamp = parseInt(point.id.split('-')[0]);
        return Date.now() - timestamp < 1000;
      }));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Code animation elements
  const codeLines = [
    'const developer = new Engineer();',
    'function createAwesome() {',
    '  return innovation + passion;',
    '}',
    'while(coding) { learn(); }',
    'git commit -m "Building future"',
    'npm run success',
    'console.log("Hello World");'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.img 
          src="/images/hero-background.png" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ opacity: imageOpacity }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated matrix-style code rain effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/30 font-mono text-sm whitespace-nowrap"
              style={{
                left: `${(i * 7)}%`,
                top: -100,
              }}
              animate={{
                y: ['0vh', '120vh'],
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            >
              {codeLines.map((line, j) => (
                <div key={j} className="mb-4">{line}</div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating binary code */}
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-blue-400/20 font-mono font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {Math.random() > 0.5 ? '01010101' : '10101010'}
          </motion.div>
        ))}

        {/* Animated circuit board lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 12.5}%`}
              y1="0%"
              x2={`${i * 12.5}%`}
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
              className="text-cyan-400"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0%"
              y1={`${i * 16.6}%`}
              x2="100%"
              y2={`${i * 16.6}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3
              }}
            />
          ))}
        </svg>

        {/* Spaceship trail (smoke effect) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {spaceshipTrail.map((point, i) => {
            const timestamp = parseInt(point.id.split('-')[0]);
            const age = Date.now() - timestamp;
            const opacity = Math.max(0, 1 - age / 1000);
            const size = 4 - (i / spaceshipTrail.length) * 3;
            
            return (
              <circle
                key={point.id}
                cx={point.x}
                cy={point.y}
                r={size}
                fill={`rgba(173, 216, 230, ${opacity * 0.6})`}
                className="blur-sm"
              />
            );
          })}
        </svg>

        {/* Spaceship */}
        {mousePos.x > 0 && (
          <motion.div
            className="absolute pointer-events-none"
            animate={{
              x: mousePos.x - 10,
              y: mousePos.y - 10,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.5
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="spaceshipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#add8e6" />
                </linearGradient>
              </defs>
              <path
                d="M10 2 L18 18 L10 14 L2 18 Z"
                fill="url(#spaceshipGradient)"
                className="drop-shadow-lg"
              />
            </svg>
          </motion.div>
        )}
      </div>

      <motion.div
        style={{ opacity }}
        className="text-center z-10 px-4 max-w-4xl mx-auto w-full"
      >
        {/* Terminal-style card background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {/* Terminal header */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/50 rounded-t-2xl flex items-center px-4 gap-2 border-b border-cyan-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-cyan-400/70 font-mono">~/portfolio/hero.jsx</span>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-8 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-lg"></div>
          <div className="absolute top-8 right-0 w-16 h-16 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-cyan-500/50 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-cyan-500/50 rounded-br-lg"></div>

          <div className="mt-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
                color: "#FFD700"
              }}
              transition={{ duration: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg cursor-pointer"
            >
              Tharaka Gamage
            </motion.h1>
            
            <div className="h-12 mb-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl text-cyan-400 drop-shadow-lg"
              >
                {displayText}
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
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors shadow-lg"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(100, 116, 139, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors shadow-lg"
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
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                transition={{ duration: 0.3 }} 
                href="https://github.com/TharakaGamage830" 
                target="_blank" 
                rel="noopener noreferrer"
                className="drop-shadow-lg"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                transition={{ duration: 0.3 }} 
                href="https://www.linkedin.com/in/tharakagamage71" 
                target="_blank" 
                rel="noopener noreferrer"
                className="drop-shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                transition={{ duration: 0.3 }} 
                href="mailto:tharakaashen830@gmail.com"
                className="drop-shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        {/* End of terminal card */}
        
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