import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>
            Work <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:w-1/2"></div>

                <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 transform -translate-x-1/2 z-10 ${isDark ? 'border-slate-800' : 'border-white'}`}></div>

                <div className="flex-1 md:w-1/2 ml-20 md:ml-0 md:px-8">
                  <div className={`p-6 rounded-lg border hover:border-primary-500/50 transition-all duration-300 group ${isDark ? 'bg-slate-700/50 border-slate-600/50' : 'bg-light-secondary border-gray-200'}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
                        <Briefcase className="text-primary-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-light'}`}>
                          {exp.title}
                        </h3>
                        <p className="text-primary-400 font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>{exp.period}</p>
                      </div>
                    </div>

                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-light'}`}>{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            className="text-primary-400 flex-shrink-0 mt-1"
                            size={16}
                          />
                          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
