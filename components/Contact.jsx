"use client";
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
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
                <span>0783271738</span>
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
                href="https://wa.me/94770674995?text=Hi%20Tharaka%20Gamage!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
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
            onSubmit={handleSubmit}
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
  );
};

export default Contact;