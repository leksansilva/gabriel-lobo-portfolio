import Link from 'next/link';
import { cacheLife } from 'next/cache';
import { siteConfig, socialLinks } from '../../constants';
import BrandLogo from '../brand-logo';

const Footer = async () => {
  'use cache';
  cacheLife('days');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <BrandLogo tone="ivory" />
          <nav aria-label="Redes sociais" className="flex items-center gap-6">
            {Object.values(socialLinks).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="text-ivory/80 hover:text-gold text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-ivory/15 text-ivory/70 flex flex-col gap-2 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            {siteConfig.name} · {siteConfig.profession} ·{' '}
            {siteConfig.registrationNumber}
          </p>
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
