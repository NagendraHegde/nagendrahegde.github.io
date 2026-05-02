import { useState } from 'react';
import { ArrowRight, CheckCircle2, Target, TrendingUp, Wrench } from 'lucide-react';
import type { FeaturedWork } from '../data/profile';
import { SectionHeading } from './SectionHeading';

type FeaturedSystemsProps = {
  featuredWork: FeaturedWork[];
};

export function FeaturedSystems({ featuredWork }: FeaturedSystemsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = featuredWork[activeIndex];
  const activeTitleId = `featured-${activeWork.name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <section id="featured-systems" className="section" aria-labelledby="featured-systems-title">
      <SectionHeading
        eyebrow="Featured work"
        title="Featured systems"
        titleId="featured-systems-title"
        summary="Three current stories anchor the portfolio: AI-assisted diagnostics, GPU operations, and modern cloud administration."
      />

      <div className="case-study-stage">
        <div className="case-study-selector" aria-label="Select featured system">
          {featuredWork.map((work, index) => (
            <button
              className="case-tab"
              type="button"
              key={work.name}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span className="case-tab-index">0{index + 1}</span>
              <span className="case-tab-copy">
                <span>{work.name}</span>
                <small>{work.kicker}</small>
              </span>
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          ))}
        </div>

        <article className="case-detail-panel" aria-labelledby={activeTitleId}>
          <p className="card-kicker">{activeWork.kicker}</p>
          <h3 id={activeTitleId}>{activeWork.name}</h3>
          <p className="case-summary">{activeWork.summary}</p>

          <dl className="case-study">
            <div>
              <dt>
                <Target aria-hidden="true" size={15} />
                Problem
              </dt>
              <dd>{activeWork.caseStudy.problem}</dd>
            </div>
            <div>
              <dt>
                <Wrench aria-hidden="true" size={15} />
                Approach
              </dt>
              <dd>{activeWork.caseStudy.approach}</dd>
            </div>
            <div>
              <dt>
                <TrendingUp aria-hidden="true" size={15} />
                Impact
              </dt>
              <dd>{activeWork.caseStudy.impact}</dd>
            </div>
          </dl>

          <div className="case-proof">
            <h4>Proof points</h4>
            <ul>
              {activeWork.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 aria-hidden="true" size={17} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tag-row" aria-label={`${activeWork.name} tags`}>
            {activeWork.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
