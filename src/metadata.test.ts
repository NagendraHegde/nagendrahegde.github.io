import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('static metadata and deployment config', () => {
  it('ships portfolio SEO tags and Person structured data', () => {
    const html = readFileSync('index.html', 'utf-8');

    expect(html).toContain('<meta property="og:title" content="Nagendra Hegde | Principal Engineer" />');
    expect(html).toContain('<link rel="canonical" href="https://nagendrahegde.github.io/" />');
    expect(html).toContain('"@type": "Person"');
    expect(html).toContain('"jobTitle": "Principal Member of Technical Staff"');
  });

  it('deploys the Vite dist build to GitHub Pages', () => {
    const workflow = readFileSync('.github/workflows/deploy-gh-pages.yml', 'utf-8');

    expect(workflow).toContain('npm ci');
    expect(workflow).toContain('npm run build');
    expect(workflow).toContain('path: ./dist');
    expect(workflow).not.toContain('jekyll-build-pages');
  });
});
