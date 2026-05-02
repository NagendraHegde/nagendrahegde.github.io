import type { ImpactMetric } from '../data/profile';
import { SectionHeading } from './SectionHeading';

type ImpactMetricsProps = {
  metrics: ImpactMetric[];
};

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <section id="impact" className="section" aria-labelledby="impact-title">
      <SectionHeading
        eyebrow="Measured outcomes"
        title="Impact metrics"
        titleId="impact-title"
        summary="A quick read on the outcomes, scale, and leadership signals from the latest resume."
      />

      <div className="metric-grid">
        {metrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
