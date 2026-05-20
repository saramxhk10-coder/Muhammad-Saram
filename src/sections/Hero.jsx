/**
 * Hero Section
 * Features: Animated background particles, name with gradient text, role title,
 * professional summary, CTA buttons, and profile image with glassmorphism card
 */
import { motion } from 'framer-motion';
import { Download, Mail, FolderOpen, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { personalInfo, socialLinks } from '../data/resumeData';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-950">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Particle canvas */}
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 mb-6"
            > */}
              <Sparkles size={14} className="text-primary-400" />
              {/* <span>Available for opportunities</span> */}
            </motion.div>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Muhammad
              <br />
              <span className="gradient-text">Saram</span>
            </h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-xl sm:text-2xl text-dark-300 font-medium"
            >
              {personalInfo.title}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mt-3 text-dark-500"
            >
              <MapPin size={16} />
              <span className="text-sm">{personalInfo.location}</span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-dark-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="/Muhammad_Saram_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-shadow"
              >
                <Download size={18} />
                Download CV
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-primary-400 font-semibold rounded-xl hover:bg-primary-500/10 transition-colors"
              >
                <FolderOpen size={18} />
                View Projects
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { name: 'GitHub', url: "https://github.com/saramxhk10-coder", icon: 'GH' },
                { name: 'LinkedIn', url: "https://www.linkedin.com/in/saram-sheikh10/", icon: 'LI' },
                { name: 'Twitter', url: socialLinks.twitter, icon: 'X' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-purple/30 rounded-3xl blur-2xl scale-110" />

              {/* Glassmorphism card */}
              <div className="relative glass rounded-3xl p-2">
  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">

    <img
      src="/Saram1.jpeg"
      alt="Muhammad Saram"
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Decorative corner accents */}
    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary-500/30 rounded-tl-2xl" />
    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent-purple/30 rounded-br-2xl" />
  </div>
</div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-1.5 bg-dark-900/90 backdrop-blur-sm border border-primary-500/30 rounded-lg text-xs font-medium text-primary-400"
              >
                React.js
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-dark-900/90 backdrop-blur-sm border border-accent-purple/30 rounded-lg text-xs font-medium text-accent-purple"
              >
                MERN Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 bg-dark-900/90 backdrop-blur-sm border border-accent-cyan/30 rounded-lg text-xs font-medium text-accent-cyan"
              >
                AI Student
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-dark-300 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
