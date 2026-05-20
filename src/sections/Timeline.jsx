/**
 * Experience & Education Timeline Section
 * Features: Interactive vertical timeline with alternating sides,
 * smooth reveal animations, work/education distinction icons
 */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience, education } from '../data/resumeData';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // Combine and sort timeline items
  const timelineItems = [
    ...experience.map((item) => ({ ...item, category: 'experience' })),
    ...education.map((item) => ({ ...item, category: 'education' })),
  ].sort((a, b) => {
    // Simple sort by period (newest first approximation)
    const getYear = (period) => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-amber/10 text-accent-amber text-sm font-medium mb-4">
            Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-balance">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-purple/30 to-transparent md:-translate-x-px" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isExperience = item.category === 'experience';
              const Icon = isExperience ? Briefcase : GraduationCap;
              const iconColor = isExperience ? 'text-primary-400' : 'text-accent-emerald';
              const iconBg = isExperience ? 'bg-primary-500/10' : 'bg-accent-emerald/10';
              const borderColor = isExperience ? 'border-primary-500/20' : 'border-accent-emerald/20';

              return (
                <motion.div
                  key={`${item.category}-${item.id}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full ${iconBg} border-2 ${borderColor} flex items-center justify-center`}>
                      <Icon size={14} className={iconColor} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className={`glass rounded-2xl p-5 sm:p-6 gradient-border hover:bg-white/[0.07] transition-colors`}>
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isExperience
                            ? 'bg-primary-500/10 text-primary-400'
                            : 'bg-accent-emerald/10 text-accent-emerald'
                        }`}>
                          {isExperience ? 'Work' : 'Education'}
                        </span>
                        <span className="flex items-center gap-1 text-dark-500 text-xs">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {isExperience ? item.role : item.degree}
                      </h3>
                      <p className="text-primary-400 text-sm font-medium mb-1">
                        {isExperience ? item.company : item.institution}
                      </p>
                      <p className="flex items-center gap-1 text-dark-500 text-xs mb-4">
                        <MapPin size={12} />
                        {item.location}
                      </p>

                      {/* Details */}
                      {isExperience ? (
                        <div className="space-y-2">
                          {item.highlights.slice(0, 3).map((highlight, hi) => (
                            <div key={hi} className="flex items-start gap-2">
                              <ChevronRight size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                              <p className="text-dark-400 text-sm leading-relaxed">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-dark-400 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
