"use client";
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Database } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <GraduationCap className="w-6 h-6" />, label: 'Computer Science Student', value: '2022 - 2025' },
    { icon: <Briefcase className="w-6 h-6" />, label: 'Projects Completed', value: '4+' },
    { icon: <Code2 className="w-6 h-6" />, label: 'Technologies', value: '15+' },
    { icon: <Database className="w-6 h-6" />, label: 'Focus', value: 'Full Stack Dev' }
  ];

  return (
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
                src="/images/profile-photo.png"
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
              {stats.map((stat, index) => (
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
  );
};

export default About;