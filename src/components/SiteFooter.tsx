import { Award, CalendarDays, GraduationCap } from 'lucide-react';
import type { PortfolioProfile } from '../data/profile';

type SiteFooterProps = {
  education: PortfolioProfile['education'];
};

export function SiteFooter({ education }: SiteFooterProps) {
  return (
    <footer id="education" className="site-footer" aria-labelledby="education-title">
      <div className="education-heading">
        <span className="education-icon" aria-hidden="true">
          <GraduationCap size={24} />
        </span>
        <div>
          <p className="eyebrow">Education</p>
          <h2 id="education-title">Academic foundation</h2>
          <p>{education.institution}</p>
        </div>
      </div>
      <div className="education-card">
        <strong>{education.degree}</strong>
        <dl className="education-meta">
          <div>
            <dt>
              <Award aria-hidden="true" size={16} />
              GPA
            </dt>
            <dd>{education.gpa}</dd>
          </div>
          <div>
            <dt>
              <CalendarDays aria-hidden="true" size={16} />
              Period
            </dt>
            <dd>{education.period}</dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}
