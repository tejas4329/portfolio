import { Heart } from 'lucide-react';
import { footer, navLinks } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`border-t ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-light-secondary border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>
              <span className="text-primary-400">&lt;</span>
              JD
              <span className="text-primary-400">/&gt;</span>
            </div>
            <p className={isDark ? 'text-gray-400' : 'text-light-secondary'}>
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`hover:text-primary-400 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>Legal</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className={`hover:text-primary-400 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
          <p className={`text-sm text-center md:text-left ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>
            {footer.copyright}
          </p>
          <p className={`text-sm flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>
            Made with <Heart size={16} className="text-primary-400" /> using
            React & Tailwind CSS
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={scrollToTop}
            className="text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
