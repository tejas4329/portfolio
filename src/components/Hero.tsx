import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { hero } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-white via-light-secondary to-light'
    }`}>
      <div className={`absolute inset-0 transition-opacity duration-300 ${
        isDark
          ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent'
          : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/30 via-transparent to-transparent'
      }`}></div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-primary-400/30' : 'bg-primary-300/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-300 ${
              isDark
                ? 'bg-primary-500/10 border border-primary-500/30 text-primary-400'
                : 'bg-primary-50 border border-primary-200 text-primary-700'
            }`}>
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-light'
            }`}
          >
            Hi, I'm{' '}
            <span className={`text-transparent bg-clip-text transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-primary-400 to-blue-400'
                : 'bg-gradient-to-r from-primary-600 to-blue-600'
            }`}>
              {hero.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-2xl sm:text-3xl md:text-4xl mb-8 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-light-secondary'
            }`}
          >
            {hero.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href={hero.cvUrl}
              download
              className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/50'
                  : 'bg-primary-600 hover:bg-primary-700 text-white hover:shadow-lg hover:shadow-primary-400/30'
              }`}
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleScrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-colors duration-300 ${
          isDark ? 'text-primary-400' : 'text-primary-600'
        }`}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
