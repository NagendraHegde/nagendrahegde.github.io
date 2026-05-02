type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  summary?: string;
  titleId: string;
};

export function SectionHeading({ eyebrow, title, summary, titleId }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {summary ? <p>{summary}</p> : null}
    </div>
  );
}
