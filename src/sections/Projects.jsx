/**
 * Projects Section
 * Features: Featured project showcase with large card, additional project cards,
 * tech stack badges, hover animations, GitHub and live demo links
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, ArrowUpRight, Layers } from 'lucide-react';
import { projects } from '../data/resumeData';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-emerald/10 text-accent-emerald text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-balance">
            Production-level applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <div className="glass rounded-3xl overflow-hidden gradient-border group">
              <div className="grid lg:grid-cols-2">
                {/* Project Image/Visual */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-purple/10 to-accent-cyan/10" />

                  {/* Decorative elements */}
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
                      <Layers size={36} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">{featuredProject.name}</h3>
                    <p className="text-dark-400 text-sm mt-1">{featuredProject.subtitle}</p>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-medium">
                      {featuredProject.period}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-dark-500 text-sm">{featuredProject.org}</span>
                  </div>

                  <p className="text-dark-300 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {featuredProject.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <p className="text-dark-400 text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-dark-500 text-xs uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.slice(0, 8).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-dark-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.tech.length > 8 && (
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-dark-500 text-xs">
                          +{featuredProject.tech.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl text-sm text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-shadow"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl overflow-hidden gradient-border group"
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-purple/5" />

                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-3">
                    <Layers size={24} className="text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{project.name}</h3>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-dark-900/80 backdrop-blur-sm text-dark-400 text-xs">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-dark-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 text-dark-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-dark-400 hover:text-white text-sm transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
