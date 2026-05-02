import { portfolioProfile } from './data/profile';

function App() {
  const { personal, hero, metrics, featuredWork, experience, skills, education } = portfolioProfile;

  return (
    <div className="site-shell">
      <header className="hero-section">
        <nav className="top-nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Nagendra Hegde home">
            NH
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="top" className="hero-content" aria-labelledby="hero-title">
          <p className="eyebrow">{personal.role}</p>
          <h1 id="hero-title">{personal.name}</h1>
          <p className="hero-headline">{hero.headline}</p>
          <p className="hero-summary">{hero.summary}</p>

          <div className="hero-actions" aria-label="Profile actions">
            {personal.links.map((link) => (
              <a key={link.label} className="action-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <ul className="focus-list" aria-label="Focus areas">
            {hero.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>
      </header>

      <main>
        <section className="section metric-grid" aria-label="Impact metrics">
          {metrics.map((metric) => (
            <article className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.description}</p>
            </article>
          ))}
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2 id="work-title">Current high-impact systems</h2>
          </div>

          <div className="work-grid">
            {featuredWork.map((work) => (
              <article className="work-card" key={work.name}>
                <p className="card-kicker">{work.kicker}</p>
                <h3>{work.name}</h3>
                <p>{work.summary}</p>
                <ul>
                  {work.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-row" aria-label={`${work.name} tags`}>
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Cloud engineering timeline</h2>
          </div>

          <div className="timeline">
            {experience.map((company) => (
              <article className="timeline-item" key={company.company}>
                <div>
                  <h3>{company.company}</h3>
                  <p>{company.location}</p>
                </div>
                <div className="role-stack">
                  {company.roles.map((role) => (
                    <section key={`${company.company}-${role.title}`} className="role">
                      <div className="role-heading">
                        <h4>{role.title}</h4>
                        <span>{role.period}</span>
                      </div>
                      <ul>
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title">Technical and leadership toolkit</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-group" key={group.category}>
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
      </main>

      <footer id="contact" className="site-footer">
        <div>
          <p className="eyebrow">Education</p>
          <strong>{education.degree}</strong>
          <span>
            {education.institution} | GPA {education.gpa} | {education.period}
          </span>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <strong>{personal.location}</strong>
          <span>
            {personal.email} | {personal.phone}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
