import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { leetcode } from '../constants';
import { useTheme } from '../context/ThemeContext';

const LeetCode = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { isDark } = useTheme();

  const easyPercentage = Math.round(
    (leetcode.easy.solved / leetcode.easy.total) * 100
  );
  const mediumPercentage = Math.round(
    (leetcode.medium.solved / leetcode.medium.total) * 100
  );
  const hardPercentage = Math.round(
    (leetcode.hard.solved / leetcode.hard.total) * 100
  );

  return (
    <section
      id="leetcode"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-light'
            }`}
          >
            LeetCode <span className="text-primary-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-8 rounded-lg border transition-all duration-300 ${
              isDark
                ? 'bg-slate-800/50 border-slate-700'
                : 'bg-light-secondary border-gray-200'
            }`}
          >
            <div className="mb-8">
              <p
                className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-light-secondary'
                }`}
              >
                Total Problems Solved
              </p>
              <h3
                className={`text-5xl font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-primary-400' : 'text-primary-600'
                }`}
              >
                {leetcode.totalSolved}
              </h3>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                out of {leetcode.easy.total + leetcode.medium.total + leetcode.hard.total} total
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-light'
                  }`}
                >
                  Current Rating
                </p>
                <p className="text-3xl font-bold text-primary-500">
                  {leetcode.rating}
                </p>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-light-secondary'
                  }`}
                >
                  {leetcode.ranking}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-light'
                  }`}
                >
                  Easy
                </span>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-light-secondary'
                  }`}
                >
                  {leetcode.easy.solved}/{leetcode.easy.total}
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full overflow-hidden transition-colors duration-300 ${
                  isDark ? 'bg-slate-700' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${easyPercentage}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-full bg-green-500"
                />
              </div>
              <p
                className={`text-xs mt-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                {easyPercentage}% Complete
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-light'
                  }`}
                >
                  Medium
                </span>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-light-secondary'
                  }`}
                >
                  {leetcode.medium.solved}/{leetcode.medium.total}
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full overflow-hidden transition-colors duration-300 ${
                  isDark ? 'bg-slate-700' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${mediumPercentage}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-yellow-500"
                />
              </div>
              <p
                className={`text-xs mt-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                {mediumPercentage}% Complete
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-light'
                  }`}
                >
                  Hard
                </span>
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-light-secondary'
                  }`}
                >
                  {leetcode.hard.solved}/{leetcode.hard.total}
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full overflow-hidden transition-colors duration-300 ${
                  isDark ? 'bg-slate-700' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${hardPercentage}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-full bg-red-500"
                />
              </div>
              <p
                className={`text-xs mt-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}
              >
                {hardPercentage}% Complete
              </p>
            </div>

            <motion.a
              href={leetcode.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-300 mt-6"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
