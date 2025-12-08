import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { about } from '../constants';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-400 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-primary-600 to-emerald-500 rounded-2xl transform -rotate-6"></div>
              <img
                src={about.imageSrc}
                alt="Profile"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-light'}`}>
              {about.bio}
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>
              {about.bio2}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className={`p-6 rounded-lg border hover:border-primary-500/50 transition-colors duration-300 ${isDark ? 'bg-slate-700/50 border-slate-600/50' : 'bg-light-secondary border-gray-200'}`}>
                <h3 className="text-4xl font-bold text-primary-400 mb-2">5+</h3>
                <p className={isDark ? 'text-gray-400' : 'text-light-secondary'}>Years Experience</p>
              </div>
              <div className={`p-6 rounded-lg border hover:border-primary-500/50 transition-colors duration-300 ${isDark ? 'bg-slate-700/50 border-slate-600/50' : 'bg-light-secondary border-gray-200'}`}>
                <h3 className="text-4xl font-bold text-primary-400 mb-2">50+</h3>
                <p className={isDark ? 'text-gray-400' : 'text-light-secondary'}>Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
