import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, ChevronDown } from 'lucide-react';
import { education, experiences } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Trajectory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();
  const [expandedId, setExpandedId] = useRef<string | null>(null);

  const allItems = [
    ...education.map((edu) => ({
      ...edu,
      type: 'education',
      icon: GraduationCap,
      title: edu.degree,
      subtitle: edu.institution,
    })),
    ...experiences.map((exp) => ({
      ...exp,
      type: 'experience',
      icon: Briefcase,
      title: exp.title,
      subtitle: exp.company,
    })),
  ].sort((a, b) => {
    const aYear = parseInt(a.period.split('-')[1]);
    const bYear = parseInt(b.period.split('-')[1]);
    return bYear - aYear;
  });

  return (
    <section id="experience" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-light-secondary'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-light'
          }`}>
            Academic &<br/>Professional <span className="text-primary-500">Trajectory</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-8"></div>
          <p className={`text-lg transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-light-secondary'
          }`}>
            A comprehensive overview of my educational foundation and professional growth
          </p>
        </motion.div>

        <div className="space-y-6">
          {allItems.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedId.current === `${item.type}-${item.id}`;

            return (
              <motion.div
                key={`${item.type}-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group rounded-xl border-2 overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 hover:border-primary-500/50'
                    : 'bg-white border-gray-200 hover:border-primary-400'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : `${item.type}-${item.id}`)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-lg flex-shrink-0 transition-all duration-300 ${
                      isDark
                        ? 'bg-primary-500/10'
                        : 'bg-primary-50'
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${
                        isDark ? 'text-primary-400' : 'text-primary-600'
                      }`}/>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 flex-wrap mb-2">
                        <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-light'
                        }`}>
                          {item.title}
                        </h3>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isDark ? 'text-primary-400' : 'text-primary-600'
                        }`}>
                          {item.period}
                        </span>
                      </div>
                      <p className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-light-secondary'
                      }`}>
                        {item.subtitle}
                      </p>
                      {item.gpa && (
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                          GPA: {item.gpa}
                        </p>
                      )}
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 mt-1 transition-colors duration-300 ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    >
                      <ChevronDown size={24}/>
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isExpanded ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-6 border-t pt-6 transition-colors duration-300 ${
                    isDark ? 'border-slate-700' : 'border-gray-200'
                  }`}>
                    <p className={`text-base leading-relaxed mb-4 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-light-secondary'
                    }`}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isExpanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                            isDark
                              ? 'bg-primary-500/10 text-primary-300'
                              : 'bg-primary-50 text-primary-700'
                          }`}
                        >
                          <Award size={14}/>
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trajectory;
