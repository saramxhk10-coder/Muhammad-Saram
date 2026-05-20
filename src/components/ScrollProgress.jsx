/**
 * Scroll Progress Indicator
 * Shows a thin colored bar at the top of the page indicating scroll position
 */
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
      }}
    />
  );
};

export default ScrollProgress;
