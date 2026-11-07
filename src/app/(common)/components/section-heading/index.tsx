import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'forest' | 'ivory';
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'forest',
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      'flex max-w-2xl flex-col gap-4',
      align === 'center' && 'mx-auto items-center text-center',
      className
    )}
  >
    <p
      className={cn(
        'text-xs font-medium tracking-[0.3em] uppercase',
        tone === 'forest' ? 'text-bronze' : 'text-gold'
      )}
    >
      {eyebrow}
    </p>
    <h2
      className={cn(
        'text-4xl text-balance md:text-5xl',
        tone === 'forest' ? 'text-forest' : 'text-ivory'
      )}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={cn(
          'text-lg text-pretty',
          tone === 'forest' ? 'text-muted-foreground' : 'text-ivory/80'
        )}
      >
        {description}
      </p>
    ) : null}
  </div>
);

export default SectionHeading;
