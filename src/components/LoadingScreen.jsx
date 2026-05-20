/**
 * Animated Loading Screen
 * Displays a premium loading animation before the main content loads
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-dark-950 flex flex-col items-center justify-center"
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-[100%] bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-cyan/10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Muhammad <span className="gradient-text">Saram</span>
            </h1>
            <p className="mt-2 text-dark-400 text-sm tracking-widest uppercase">
              Frontend Engineer & AI Student
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="text-dark-500 text-sm font-mono"
            key={Math.floor(progress)}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.p>

          {/* Decorative dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
