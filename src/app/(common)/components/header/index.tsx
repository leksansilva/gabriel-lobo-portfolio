'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navigationLinks, whatsappLink } from '../../constants';
import { useLayoutStore } from '../../stores';
import BrandLogo from '../brand-logo';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useLayoutStore();

  return (
    <header className="bg-background/85 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-(--header-height) w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Início" onClick={closeMobileMenu}>
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Principal"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-forest text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-full px-5">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar consulta
            </Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          data-testid="mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </div>

      <nav
        aria-label="Principal (mobile)"
        className={cn(
          'bg-background border-b lg:hidden',
          isMobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:bg-muted block rounded-md px-2 py-2 text-sm font-medium"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full rounded-full">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Agendar consulta
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
