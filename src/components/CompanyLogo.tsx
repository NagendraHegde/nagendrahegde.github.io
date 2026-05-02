import type { Experience } from '../data/profile';

type CompanyLogoProps = {
  logo: Experience['logo'];
};

const logoAssets: Record<Experience['logo'], string> = {
  oracle: '/logos/oracle-logo.jpg',
  autodesk: '/logos/autodesk%20logo.png',
  sap: '/logos/sap-logo.jpg',
};

export function CompanyLogo({ logo }: CompanyLogoProps) {
  return (
    <span className={`company-logo company-logo-${logo}`} aria-hidden="true">
      <img src={logoAssets[logo]} alt="" loading="lazy" />
    </span>
  );
}
