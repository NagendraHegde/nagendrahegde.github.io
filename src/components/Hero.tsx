import { Check, ExternalLink, Globe2, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import type { PortfolioProfile } from '../data/profile';

type HeroProps = {
  personal: PortfolioProfile['personal'];
  hero: PortfolioProfile['hero'];
};

function getLinkIcon(label: string) {
  if (label === 'Portfolio') {
    return <Globe2 aria-hidden="true" size={17} />;
  }

  return <ExternalLink aria-hidden="true" size={17} />;
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export function Hero({ personal, hero }: HeroProps) {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  async function handleCopy(label: string, value: string) {
    await copyToClipboard(value);
    setCopiedContact(label);
    window.setTimeout(() => setCopiedContact(null), 1800);
  }

  return (
    <section id="top" className="hero-content" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{personal.role}</p>
        <h1 id="hero-title">{personal.name}</h1>
        <p className="hero-headline">{hero.headline}</p>
        <p className="hero-summary">{hero.summary}</p>

        <div className="hero-actions" aria-label="Profile actions">
          <button
            className="action-link"
            type="button"
            aria-label="Copy email address"
            onClick={() => void handleCopy('Email', personal.email)}
          >
            {copiedContact === 'Email' ? <Check aria-hidden="true" size={17} /> : <Mail aria-hidden="true" size={17} />}
            <span>{copiedContact === 'Email' ? 'Email copied' : 'Email'}</span>
          </button>
          <button
            className="action-link"
            type="button"
            aria-label="Copy phone number"
            onClick={() => void handleCopy('Phone', personal.phone)}
          >
            {copiedContact === 'Phone' ? <Check aria-hidden="true" size={17} /> : <Phone aria-hidden="true" size={17} />}
            <span>{copiedContact === 'Phone' ? 'Phone copied' : 'Phone'}</span>
          </button>
          {personal.links.map((link) => (
            <a
              key={link.label}
              className="action-link"
              href={link.href}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {getLinkIcon(link.label)}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <span className="copy-status" aria-live="polite">
          {copiedContact ? `${copiedContact} copied to clipboard` : ''}
        </span>
      </div>

      <div className="hero-rail">
        <aside className="hero-snapshot" aria-label="Career snapshot">
          <p className="eyebrow">Career snapshot</p>
          <h2 id="snapshot-title">Cloud reliability, AI operations, and engineering leadership.</h2>
          <dl>
            {hero.snapshot.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="focus-list" aria-label="Focus areas">
            {hero.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
