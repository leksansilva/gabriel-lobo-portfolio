import { cn } from '@/lib/utils';
import { siteConfig } from '../../constants';

type BrandTone = 'forest' | 'ivory';

const symbolTone: Record<BrandTone, { head: string; vein: string }> = {
  forest: { head: 'fill-forest', vein: 'stroke-ivory' },
  ivory: { head: 'fill-ivory', vein: 'stroke-forest' },
};

const wordmarkTone: Record<BrandTone, { name: string; profession: string }> = {
  forest: { name: 'text-forest', profession: 'text-bronze' },
  ivory: { name: 'text-ivory', profession: 'text-gold' },
};

type BrandSymbolProps = {
  tone?: BrandTone;
  className?: string;
};

export const BrandSymbol = ({
  tone = 'forest',
  className,
}: BrandSymbolProps) => (
  <svg
    viewBox="0 0 100 120"
    aria-hidden="true"
    className={cn('h-10 w-auto', className)}
  >
    <circle cx="50" cy="12" r="5" className="fill-gold" />
    <path
      d="M8 20 L29 42 Q50 26 71 42 L92 20 L98 62 L50 116 L2 62 Z"
      className={symbolTone[tone].head}
    />
    <path
      d="M50 50 V102 M50 66 L37 54 M50 66 L63 54 M50 84 L39 73 M50 84 L61 73"
      strokeWidth="3.5"
      fill="none"
      className={symbolTone[tone].vein}
    />
  </svg>
);

type BrandLogoProps = {
  tone?: BrandTone;
  className?: string;
};

const BrandLogo = ({ tone = 'forest', className }: BrandLogoProps) => (
  <span className={cn('inline-flex items-center gap-3', className)}>
    <BrandSymbol tone={tone} />
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          'font-heading text-2xl font-medium',
          wordmarkTone[tone].name
        )}
      >
        {siteConfig.name}
      </span>
      <span
        className={cn(
          'mt-1 text-[0.6rem] tracking-[0.3em] uppercase',
          wordmarkTone[tone].profession
        )}
      >
        {siteConfig.profession}
      </span>
    </span>
  </span>
);

export default BrandLogo;
