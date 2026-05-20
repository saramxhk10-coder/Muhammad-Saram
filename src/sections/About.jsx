/**
 * About Section
 * Features: Personal introduction, career goals, passion statement,
 * education summary with animated cards
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { personalInfo, education } from '../data/resumeData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-balance">
            A passionate developer bridging the gap between design and engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left: Main content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Introduction Card */}
            <div className="glass rounded-2xl p-6 sm:p-8 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <BookOpen size={20} className="text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Introduction</h3>
              </div>
              <p className="text-dark-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Career Goal */}
            <div className="glass rounded-2xl p-6 sm:p-8 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                  <Target size={20} className="text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">Career Goal</h3>
              </div>
              <p className="text-dark-300 leading-relaxed">
                {personalInfo.careerGoal}
              </p>
            </div>

            {/* Passion */}
            <div className="glass rounded-2xl p-6 sm:p-8 gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-rose/10 flex items-center justify-center">
                  <Heart size={20} className="text-accent-rose" />
                </div>
                <h3 className="text-xl font-semibold text-white">Passion</h3>
              </div>
              <p className="text-dark-300 leading-relaxed">
                {personalInfo.passion}
              </p>
            </div>
          </motion.div>

          {/* Right: Education & Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Education */}
            <div className="glass rounded-2xl p-6 sm:p-8 gradient-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                    className="relative pl-6 border-l-2 border-dark-700"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-900 border-2 border-primary-500" />
                    <h4 className="text-white font-semibold">{edu.degree}</h4>
                    <p className="text-primary-400 text-sm mt-1">{edu.institution}</p>
                    <p className="text-dark-500 text-sm">{edu.period}</p>
                    {edu.details && (
                      <p className="text-dark-400 text-sm mt-2 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Coding', value: '4+', icon: Lightbulb, color: 'text-accent-amber' },
                { label: 'Projects Built', value: '10+', icon: Target, color: 'text-primary-400' },
                { label: 'Technologies', value: '15+', icon: BookOpen, color: 'text-accent-cyan' },
                { label: 'Certifications', value: '2+', icon: GraduationCap, color: 'text-accent-purple' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="glass rounded-xl p-4 text-center gradient-border"
                >
                  <stat.icon size={20} className={`mx-auto mb-2 ${stat.color}`} />
                  <p className="text-2xl font-bold text-white font-display">{stat.value}</p>
                  <p className="text-dark-500 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
