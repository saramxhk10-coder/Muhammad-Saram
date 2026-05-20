/**
 * Main App Component
 * Orchestrates all sections, manages loading state, theme, and scroll behavior
 */
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

// Hooks
import { useActiveSection } from './hooks/useActiveSection';
import { navLinks } from './data/resumeData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Track active section for navbar highlighting
  const sectionIds = navLinks.map((link) => link.href.slice(1));
  const activeSection = useActiveSection(sectionIds);

  // Theme toggle
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Apply theme class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-dark-950 text-dark-100">
          {/* Scroll Progress Indicator */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar
            activeSection={activeSection}
            isDark={isDark}
            toggleTheme={toggleTheme}
          />

          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Certifications />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
