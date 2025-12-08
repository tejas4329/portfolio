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
    <section id="about" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-light'
          }`}>
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-12"></div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 lg:w-36 lg:h-36">
                <div className="absolute inset-0 bg-primary-500 opacity-20 rounded-full blur-xl"></div>

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                  <defs>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  <g filter="url(#shadow)">
                    <path
                      d="M 80 10 L 120 35 L 120 110 L 80 135 L 40 110 L 40 35 Z"
                      fill="none"
                      stroke={isDark ? '#3b82f6' : '#2563eb'}
                      strokeWidth="2"
                    />
                    <path
                      d="M 75 15 L 115 40 L 115 105 L 75 130 L 45 105 L 45 40 Z"
                      fill="none"
                      stroke={isDark ? '#3b82f6' : '#2563eb'}
                      strokeWidth="1"
                      opacity="0.4"
                    />
                  </g>
                </svg>

                <img
                  src={about.imageSrc}
                  alt="Profile"
                  className="absolute inset-2 w-36 h-36 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 space-y-6"
            >
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-light-secondary'
              }`}>
                {about.bio}
              </p>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {about.bio2}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-700/30 border-slate-600/50 hover:border-primary-500/50'
                      : 'bg-light-secondary border-gray-200 hover:border-primary-400'
                  }`}
                >
                  <h3 className="text-3xl font-bold text-primary-500 mb-2">5+</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-light-secondary'}>Years Experience</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-700/30 border-slate-600/50 hover:border-primary-500/50'
                      : 'bg-light-secondary border-gray-200 hover:border-primary-400'
                  }`}
                >
                  <h3 className="text-3xl font-bold text-primary-500 mb-2">50+</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-light-secondary'}>Projects Completed</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
