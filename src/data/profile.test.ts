import { describe, expect, it } from 'vitest';
import { portfolioProfile } from './profile';

describe('portfolioProfile', () => {
  it('centers the current OCI AI infrastructure narrative', () => {
    expect(portfolioProfile.personal.name).toBe('Nagendra Hegde');
    expect(portfolioProfile.personal.role).toBe('Principal Member of Technical Staff');
    expect(portfolioProfile.hero.headline).toContain('AI-assisted operations');

    const featuredWorkNames = portfolioProfile.featuredWork.map((item) => item.name);
    expect(featuredWorkNames).toEqual(
      expect.arrayContaining([
        'Vuffi',
        'GB200 Operations Framework',
        'C4PO Modernization',
      ]),
    );
  });

  it('preserves the resume impact metrics and chronology', () => {
    const metricValues = portfolioProfile.metrics.map((metric) => metric.value);

    expect(metricValues).toEqual(expect.arrayContaining(['10+', '40%', '10%', '80%+']));
    expect(portfolioProfile.experience[0].company).toBe('Oracle India Pvt Ltd (OCI)');
    expect(portfolioProfile.experience[0].roles[0].title).toBe(
      'Principal Member of Technical Staff',
    );
    const lastExperience = portfolioProfile.experience[portfolioProfile.experience.length - 1];
    expect(lastExperience.company).toBe('Oracle India Pvt Ltd');
  });

  it('groups skills into portfolio-ready categories', () => {
    expect(portfolioProfile.skills.map((group) => group.category)).toEqual([
      'Leadership & Strategy',
      'AI & Developer Productivity',
      'Distributed Systems & Cloud',
      'Languages, DBs & Observability',
    ]);
  });
});
