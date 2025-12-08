import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { contact, socialLinks } from '../constants';
import * as LucideIcons from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-light'}`}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className={`hover:text-primary-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-light'}`}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <Phone className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>Phone</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className={`hover:text-primary-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-light'}`}
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-light-secondary'}`}>Location</p>
                    <p className={isDark ? 'text-white' : 'text-light'}>{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-light'}`}>
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent =
                    LucideIcons[
                      link.icon as keyof typeof LucideIcons
                    ] as React.ComponentType<{ size?: number }>;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 hover:bg-primary-500 rounded-lg transition-all duration-300 transform hover:scale-110 group ${isDark ? 'bg-slate-700' : 'bg-light-secondary'}`}
                      aria-label={link.name}
                    >
                      {IconComponent && (
                        <IconComponent size={24} />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-light'}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-200 text-light'}`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-light'}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-200 text-light'}`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-light'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-200 text-light'}`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
