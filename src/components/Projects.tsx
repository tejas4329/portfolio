import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tagColors: { [key: string]: { light: string; dark: string } } = {
    'React': { light: 'bg-blue-100 text-blue-700', dark: 'bg-blue-900/30 text-blue-300' },
    'TypeScript': { light: 'bg-indigo-100 text-indigo-700', dark: 'bg-indigo-900/30 text-indigo-300' },
    'JavaScript': { light: 'bg-yellow-100 text-yellow-700', dark: 'bg-yellow-900/30 text-yellow-300' },
    'Next.js': { light: 'bg-slate-100 text-slate-700', dark: 'bg-slate-700/40 text-slate-300' },
    'Node.js': { light: 'bg-green-100 text-green-700', dark: 'bg-green-900/30 text-green-300' },
    'PostgreSQL': { light: 'bg-orange-100 text-orange-700', dark: 'bg-orange-900/30 text-orange-300' },
    'MongoDB': { light: 'bg-emerald-100 text-emerald-700', dark: 'bg-emerald-900/30 text-emerald-300' },
    'Firebase': { light: 'bg-amber-100 text-amber-700', dark: 'bg-amber-900/30 text-amber-300' },
    'Tailwind': { light: 'bg-cyan-100 text-cyan-700', dark: 'bg-cyan-900/30 text-cyan-300' },
    'Express': { light: 'bg-gray-100 text-gray-700', dark: 'bg-gray-700/40 text-gray-300' },
    'Stripe': { light: 'bg-purple-100 text-purple-700', dark: 'bg-purple-900/30 text-purple-300' },
    'OpenWeather': { light: 'bg-teal-100 text-teal-700', dark: 'bg-teal-900/30 text-teal-300' },
    'Chart.js': { light: 'bg-rose-100 text-rose-700', dark: 'bg-rose-900/30 text-rose-300' },
  };

  const getTagColor = (tag: string) => {
    return tagColors[tag] || (isDark ? 'bg-slate-700/40 text-slate-300' : 'bg-slate-100 text-slate-700');
  };

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-white'
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
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mb-6"></div>
          <p className={`text-lg max-w-2xl transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-light-secondary'
          }`}>
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                perspective: '1000px',
              }}
              className={`group rounded-xl overflow-hidden border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800 border-slate-700 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10'
                  : 'bg-white border-gray-200 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-400/10'
              }`}
            >
              <motion.div
                animate={
                  hoveredCard === project.id
                    ? { rotateX: 5, rotateY: -5 }
                    : { rotateX: 0, rotateY: 0 }
                }
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="w-full h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isDark
                      ? 'bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80'
                      : 'bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-40 group-hover:opacity-60'
                  }`}></div>
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-light'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 line-clamp-3 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-light-secondary'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => {
                      const colors = getTagColor(tag);
                      return (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${colors}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 ${
                        isDark
                          ? 'bg-slate-700 hover:bg-slate-600 text-white'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
