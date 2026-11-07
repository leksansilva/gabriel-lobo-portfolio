import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/app/(common)/components';
import { whatsappLink } from '@/app/(common)/constants';
import { Button } from '@/components/ui/button';
import { heroContent } from '../../constants';

const HeroSection = () => (
  <section
    id="inicio"
    className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
  >
    <Reveal className="flex flex-col items-start gap-6">
      <p className="text-bronze text-xs font-medium tracking-[0.3em] uppercase">
        {heroContent.eyebrow}
      </p>
      <h1 className="text-forest max-w-xl text-5xl text-balance md:text-6xl lg:text-7xl">
        {heroContent.title}
      </h1>
      <p className="text-muted-foreground max-w-lg text-lg text-pretty md:text-xl">
        {heroContent.description}
      </p>
      <div className="flex flex-wrap gap-3">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-7 text-base"
          data-testid="hero-primary-action"
        >
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {heroContent.primaryAction.label}
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-forest/30 text-forest h-12 rounded-full px-7 text-base"
        >
          <Link href={heroContent.secondaryAction.href}>
            {heroContent.secondaryAction.label}
          </Link>
        </Button>
      </div>
      <ul className="mt-4 flex flex-col gap-3">
        {heroContent.highlights.map((highlight) => (
          <li key={highlight.label} className="flex items-center gap-3 text-sm">
            <span className="bg-forest/10 text-forest flex size-8 shrink-0 items-center justify-center rounded-full">
              <highlight.icon className="size-4" />
            </span>
            {highlight.label}
          </li>
        ))}
      </ul>
    </Reveal>

    <Reveal
      delay={0.15}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="bg-gold/30 absolute -top-4 -right-4 h-full w-full rounded-[2rem]" />
      <div className="bg-forest relative overflow-hidden rounded-[2rem] shadow-xl">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          width={heroContent.image.width}
          height={heroContent.image.height}
          priority
          sizes="(min-width: 1024px) 480px, 90vw"
          className="aspect-[3/4] w-full object-cover object-top"
        />
      </div>
    </Reveal>
  </section>
);

export default HeroSection;
