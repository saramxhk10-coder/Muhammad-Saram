/**
 * Certifications & Achievements Section
 * Features: Modern badge-style cards with icons, issuer info,
 * date, and hover animations with glassmorphism
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, CheckCircle2, Trophy, Medal, Star } from 'lucide-react';
import { certifications } from '../data/resumeData';

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  Medal: Medal,
  Star: Star,
};

const Certifications = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-amber/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-rose/10 text-accent-rose text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-balance">
            Professional certifications and accomplishments that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 gradient-border group cursor-default"
              >
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 flex items-center justify-center`}>
                    <IconComponent size={26} className="text-white" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-emerald/10 text-accent-emerald text-xs font-medium">
                    <CheckCircle2 size={12} />
                    Verified
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-dark-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-dark-500 text-xs">{cert.date}</p>

                {/* Decorative line */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-500 text-xs">Cisco Networking Academy</span>
                    <ExternalLink size={14} className="text-dark-600 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Achievement Card - Additional */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-6 gradient-border group cursor-default"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-amber to-accent-rose bg-opacity-20 flex items-center justify-center">
                <Trophy size={26} className="text-white" />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-amber/10 text-accent-amber text-xs font-medium">
                <Star size={12} fill="currentColor" />
                Achievement
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
              Component Reuse Champion
            </h3>
            <p className="text-dark-400 text-sm mb-1">Nexape</p>
            <p className="text-dark-500 text-xs">Jun 2025 — Oct 2025</p>

            <div className="mt-5 pt-4 border-t border-white/5">
              <p className="text-dark-400 text-sm">
                Increased component reuse by ~40% across the platform through modular architecture
              </p>
            </div>
          </motion.div>

          {/* Achievement Card - Agile */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-6 gradient-border group cursor-default"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan bg-opacity-20 flex items-center justify-center">
                <Medal size={26} className="text-white" />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-medium">
                <Star size={12} fill="currentColor" />
                Milestone
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
              18 Sprints Delivered
            </h3>
            <p className="text-dark-400 text-sm mb-1">Smart-AD Suite Project</p>
            <p className="text-dark-500 text-xs">2024 — 2026</p>

            <div className="mt-5 pt-4 border-t border-white/5">
              <p className="text-dark-400 text-sm">
                Successfully delivered full technical documentation including SDS, ERD, DFD, and sequence diagrams
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
