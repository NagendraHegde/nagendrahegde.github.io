import { useEffect, useState } from 'react';
import { portfolioProfile } from './data/profile';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedSystems } from './components/FeaturedSystems';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { Navigation } from './components/Navigation';
import { SiteFooter } from './components/SiteFooter';
import { SkillsMatrix } from './components/SkillsMatrix';
import { useScrollReveal } from './hooks/useScrollReveal';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem('portfolio-theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const { personal, hero, metrics, featuredWork, experience, skills, education } = portfolioProfile;
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  useScrollReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#08111f' : '#f5f7fb',
    );
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <Navigation
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
      />
      <header className="hero-section">
        <Hero personal={personal} hero={hero} />
      </header>

      <main className="main-content">
        <ImpactMetrics metrics={metrics} />
        <ExperienceTimeline experience={experience} />
        <FeaturedSystems featuredWork={featuredWork} />
        <SkillsMatrix skills={skills} />
      </main>

      <SiteFooter education={education} />
    </div>
  );
}

export default App;
