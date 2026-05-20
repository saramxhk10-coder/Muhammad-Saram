/**
 * Sticky Navigation Bar
 * Features: Active section highlighting, theme toggle, smooth scroll to sections
 * Glassmorphism effect with blur backdrop
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, socialLinks } from '../data/resumeData';

const Navbar = ({ activeSection, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-lg font-display">
                MS
              </div>
              <span className="font-display font-bold text-lg text-white hidden sm:block">
                Saram<span className="text-primary-400">.</span>dev
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-white'
                      : 'text-dark-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Social icons - desktop */}
              <div className="hidden md:flex items-center gap-1">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-dark-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <Github size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-dark-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2 text-dark-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-dark-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 hidden md:block"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-dark-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <div className="relative pt-20 px-6 pb-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-white/10 text-white'
                        : 'text-dark-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile social links */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-dark-400 hover:text-white transition-colors rounded-xl bg-white/5"
                >
                  <Github size={20} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-dark-400 hover:text-white transition-colors rounded-xl bg-white/5"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-3 text-dark-400 hover:text-white transition-colors rounded-xl bg-white/5"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
