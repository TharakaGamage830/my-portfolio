"use client";
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
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
  );
};

export default Education;