import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the profile shell from structured data', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Nagendra Hegde/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Vuffi' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /GB200 Operations Framework/i }),
    ).toBeInTheDocument();
    const linkedInLinks = screen.getAllByRole('link', { name: /LinkedIn/i });
    expect(linkedInLinks.map((link) => link.getAttribute('href'))).toContain(
      'https://linkedin.com/in/nagendra-hegde',
    );
  });

  it('exposes the core portfolio sections through accessible navigation', () => {
    render(<App />);

    const nav = screen.getByRole('navigation', { name: /Portfolio sections/i });
    expect(nav).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Impact' })).toHaveAttribute('href', '#impact');
    expect(screen.getByRole('link', { name: 'Featured Projects' })).toHaveAttribute(
      'href',
      '#featured-projects',
    );
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Education' })).toHaveAttribute('href', '#education');

    expect(screen.getByRole('region', { name: /Impact metrics/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /Featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /Experience timeline/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /Skills matrix/i })).toBeInTheDocument();

    const experience = screen.getByRole('region', { name: /Experience timeline/i });
    const featuredProjects = screen.getByRole('region', { name: /Featured projects/i });
    expect(experience.compareDocumentPosition(featuredProjects)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  it('renders a concise career snapshot in the hero', () => {
    render(<App />);

    const snapshot = screen.getByRole('complementary', { name: /Career snapshot/i });

    expect(within(snapshot).getByText('Bengaluru, Karnataka')).toBeInTheDocument();
    expect(within(snapshot).getByText('OCI Compute')).toBeInTheDocument();
    expect(within(snapshot).getByText('AI Infrastructure')).toBeInTheDocument();
    expect(within(snapshot).getByText('Principal Engineer')).toBeInTheDocument();
  });

  it('keeps contact actions in the hero and copies direct contact values', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Copy email address/i }));
    expect(writeText).toHaveBeenCalledWith('nagendrahegde4sdmcet@gmail.com');
    expect(await screen.findByText('Email copied to clipboard')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Copy phone number/i }));
    expect(writeText).toHaveBeenCalledWith('+91 8553856116');
    expect(screen.queryByRole('complementary', { name: /Systems console/i })).not.toBeInTheDocument();
  });

  it('supports a visible light and dark theme toggle', () => {
    render(<App />);

    const toggle = screen.getByRole('button', { name: /Switch to dark mode/i });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark');
    expect(screen.getByRole('button', { name: /Switch to light mode/i })).toBeInTheDocument();
  });

  it('formats featured projects as case studies with problem, approach, and impact', () => {
    render(<App />);

    const vuffi = screen.getByRole('article', { name: /Vuffi/i });

    expect(within(vuffi).getByText('Problem')).toBeInTheDocument();
    expect(within(vuffi).getByText('Approach')).toBeInTheDocument();
    expect(within(vuffi).getByText('Impact')).toBeInTheDocument();
  });

  it('lets visitors switch between featured case studies', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /GB200 Operations Framework/i }));

    const gb200 = screen.getByRole('article', { name: /GB200 Operations Framework/i });
    expect(within(gb200).getByText(/API-driven access to live device command execution/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /GB200 Operations Framework/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('uses the case-study interaction model for experience and shows company logos', () => {
    const { container } = render(<App />);

    expect(container.querySelectorAll('.company-logo').length).toBeGreaterThanOrEqual(2);
    expect(container.querySelector('img[src="/logos/oracle-logo.jpg"]')).toBeInTheDocument();
    expect(container.querySelector('img[src="/logos/autodesk%20logo.png"]')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /SAP Labs/i }));

    const sap = screen.getByRole('article', { name: /SAP Labs India/i });
    expect(within(sap).getByText(/multi-cloud containerized environment/i)).toBeInTheDocument();
    expect(container.querySelector('img[src="/logos/sap-logo.jpg"]')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /SAP Labs/i })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('presents education as a single college-focused panel', () => {
    render(<App />);

    const education = screen.getByRole('contentinfo');
    expect(within(education).getByRole('heading', { name: /SDM College/i })).toBeInTheDocument();
    expect(within(education).queryByText(/Academic foundation/i)).not.toBeInTheDocument();
  });
});
