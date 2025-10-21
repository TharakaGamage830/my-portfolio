"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Code2, Database, Cloud, Terminal, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Software Engineer', 'Computer Science Student', 'Full Stack Developer'];
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  // Typing animation
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentRole = roles[roleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex < currentRole.length) {
        currentText += currentRole[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setTypedText(currentText);
            } else {
              clearInterval(deletingInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C', level: 75 }
      ]
    },
    {
      category: 'Frontend Development',
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { name: 'React.js', level: 88 },
        { name: 'JavaFX', level: 80 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 82 }
      ]
    },
    {
      category: 'Backend Development',
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'PHP', level: 75 }
      ]
    },
    {
      category: 'Databases',
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: 'Docker', level: 75 },
        { name: 'Jenkins', level: 70 },
        { name: 'AWS', level: 72 },
        { name: 'Google Cloud', level: 68 }
      ]
    }
  ];

  const projects = [
    {
      title: 'Rashmi Tyre Streamline Solution',
      description: 'Enterprise web application for tire shop management with AI-powered stock predictions and automated WhatsApp notifications',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Jenkins', 'Meta Prophet', 'OpenAI'],
      features: [
        'Inventory & employee management',
        'AI-driven stock forecasting',
        'Multi-AI agent chatbot',
        'Automated WhatsApp notifications'
      ],
      role: 'Team Member (Agile Development)',
      github: 'https://github.com/TharakaGamage830'
    },
    {
      title: 'BloodConnect',
      description: 'Centralized MERN stack platform connecting blood donors, recipients, blood banks, and organizations for efficient blood donation coordination',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Figma'],
      features: [
        'Role-based dashboards (5 user types)',
        'Blood compatibility matching',
        'Event management system',
        'Real-time request handling'
      ],
      role: 'Solo Developer',
      github: 'https://github.com/TharakaGamage830',
      live: '#'
    },
    {
      title: 'SafePath Observers',
      description: 'Driving school management system with student, instructor, and admin modules for comprehensive course and attendance tracking',
      tech: ['PHP', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'MySQL'],
      features: [
        'Multi-role authentication system',
        'Student enrollment & progress tracking',
        'Course management',
        'PDF report generation'
      ],
      role: 'Team Leader & Developer',
      github: 'https://github.com/TharakaGamage830'
    },
    {
      title: 'WildNet',
      description: 'Interactive wildlife education platform with personalized dashboards, games, and real-time animal data integration',
      tech: ['Java', 'JavaFX', 'MySQL', 'FXML', 'HTML/CSS'],
      features: [
        'Personalized user dashboards',
        'Wildlife-themed educational games',
        'Dynamic learning center',
        'Customizable UI themes'
      ],
      role: 'Developer',
      github: 'https://github.com/TharakaGamage830'
    }
  ];

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              TG
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 hover:bg-slate-700 transition-colors"
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      {/* <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-cyan-400 rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
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
      </section> */}

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="/images/profile-photo.jpg"
                  alt="Tharaka Gamage"
                  className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400/50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Computer Science student at the University of Ruhuna, specializing in full-stack development with a focus on building scalable, user-centric applications. With expertise spanning from AI-powered enterprise solutions to healthcare platforms, I thrive on solving complex problems through innovative technology.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My experience includes developing enterprise management systems, healthcare platforms, and educational applications using modern tech stacks like React, Spring Boot, and MERN. I'm actively seeking software engineering internships where I can contribute to impactful projects and continue growing as a developer.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <GraduationCap className="w-6 h-6" />, label: 'Computer Science Student', value: '2022 - Present' },
                  { icon: <Briefcase className="w-6 h-6" />, label: 'Projects Completed', value: '4+' },
                  { icon: <Code2 className="w-6 h-6" />, label: 'Technologies', value: '15+' },
                  { icon: <Database className="w-6 h-6" />, label: 'Focus', value: 'Full Stack Dev' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700"
                  >
                    <div className="text-cyan-400 mb-2">{stat.icon}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-xl font-bold">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Technical <span className="text-cyan-400">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-cyan-400">{skillGroup.icon}</div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: groupIndex * 0.1 + skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-cyan-400 font-semibold mb-2">Key Features:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Role: <span className="text-white">{project.role}</span></p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-cyan-400">Education</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-cyan-400">
                <GraduationCap className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Science</h3>
                <p className="text-xl text-cyan-400 mb-2">University of Ruhuna</p>
                <p className="text-gray-400 mb-4">Matara, Sri Lanka</p>
                <p className="text-gray-300">2022 - Present</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Get In <span className="text-cyan-400">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:tharakaashen830@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>tharakaashen830@gmail.com</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:personalemail.gamage.lk@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>personalemail.gamage.lk@gmail.com</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-5 h-5">📱</span>
                  <span>+94 78 327 1738</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-5 h-5">📍</span>
                  <span>Pitigala, Sri Lanka</span>
                </motion.div>
              </div>

              <div className="flex gap-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://github.com/TharakaGamage830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://www.linkedin.com/in/tharakagamage71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://medium.com/@tharakaashen830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors text-2xl"
                >
                  M
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 text-center text-gray-400">
        <p>© 2024 Tharaka Gamage. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;