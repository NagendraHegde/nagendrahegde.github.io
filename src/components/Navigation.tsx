import { ThemeToggle } from './ThemeToggle';

type NavigationProps = {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
};

const sectionLinks = [
  { label: 'Impact', href: '#impact' },
  { label: 'Featured Systems', href: '#featured-systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export function Navigation({ theme, onThemeToggle }: NavigationProps) {
  return (
    <nav className="top-nav" aria-label="Portfolio sections">
      <a className="brand-name" href="#top" aria-label="Nagendra Hegde home">
        Nagendra Hegde
      </a>

      <div className="nav-links">
        {sectionLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </nav>
  );
}
