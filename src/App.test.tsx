import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the profile shell from structured data', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /Nagendra Hegde/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Vuffi' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'GB200 Operations Framework' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/nagendra-hegde',
    );
  });
});
