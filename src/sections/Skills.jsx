/**
 * Skills Section
 * Features: Categorized skill cards with animated progress bars,
 * icon indicators, hover effects, and glassmorphism styling
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layout, Palette, Server, Figma, Wrench } from 'lucide-react';
import { skills } from '../data/resumeData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Palette: Palette,
  Server: Server,
  Figma: Figma,
  Wrench: Wrench,
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-balance">
            A comprehensive toolkit built through hands-on production experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, data]) => {
            const IconComponent = iconMap[data.icon] || Code2;
            return (
              <motion.div
                key={category}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 gradient-border group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${data.color} bg-opacity-10 flex items-center justify-center`}>
                    <IconComponent size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                    <p className="text-dark-500 text-xs">{data.items.length} skills</p>
                  </div>
                </div>

                {/* Skill Items with Progress Bars */}
                <div className="space-y-4">
                  {data.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-dark-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-dark-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.3 + index * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${data.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <p className="text-center text-dark-500 text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript',
              'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
              'Material UI', 'Git', 'GitHub', 'Figma', 'REST APIs',
              'JWT Auth', 'Agile/Scrum', 'Postman',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-dark-300 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
