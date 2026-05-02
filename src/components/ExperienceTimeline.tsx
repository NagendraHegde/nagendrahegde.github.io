import { useState } from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, MapPin } from 'lucide-react';
import type { Experience } from '../data/profile';
import { CompanyLogo } from './CompanyLogo';
import { SectionHeading } from './SectionHeading';

type ExperienceTimelineProps = {
  experience: Experience[];
};

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experience[activeIndex];
  const activeTitleId = `experience-${activeExperience.shortName.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="Experience"
        title="Experience timeline"
        titleId="experience-title"
        summary="A compact chronology of cloud systems work across Oracle OCI, Autodesk, SAP Labs, and Oracle Cloud Classic."
      />

      <div className="case-study-stage experience-stage">
        <div className="case-study-selector" aria-label="Select company experience">
          {experience.map((company, index) => (
            <button
              className="case-tab company-tab"
              type="button"
              key={company.company}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <CompanyLogo logo={company.logo} />
              <span className="case-tab-copy">
                <span>{company.shortName}</span>
                <small>{company.location}</small>
              </span>
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          ))}
        </div>

        <article className="case-detail-panel experience-detail" aria-labelledby={activeTitleId}>
          <div className="company-detail-heading">
            <CompanyLogo logo={activeExperience.logo} />
            <div>
              <p className="card-kicker">
                <MapPin aria-hidden="true" size={14} />
                {activeExperience.location}
              </p>
              <h3 id={activeTitleId}>{activeExperience.company}</h3>
              <p className="case-summary">{activeExperience.overview}</p>
            </div>
          </div>

          <div className="role-stack">
            {activeExperience.roles.map((role) => (
              <section key={`${activeExperience.company}-${role.title}`} className="role-card">
                <div className="role-heading">
                  <h4>{role.title}</h4>
                  <span>
                    <CalendarDays aria-hidden="true" size={15} />
                    {role.period}
                  </span>
                </div>
                <ul className="role-highlights">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 aria-hidden="true" size={17} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
