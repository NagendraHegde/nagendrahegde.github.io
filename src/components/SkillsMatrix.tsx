import type { SkillGroup } from '../data/profile';
import { SectionHeading } from './SectionHeading';

type SkillsMatrixProps = {
  skills: SkillGroup[];
};

export function SkillsMatrix({ skills }: SkillsMatrixProps) {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="Skills matrix"
        titleId="skills-title"
        summary="The portfolio groups the resume into practical capability clusters instead of a flat keyword dump."
      />

      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-group" key={group.category} data-reveal>
            <h3>{group.category}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
