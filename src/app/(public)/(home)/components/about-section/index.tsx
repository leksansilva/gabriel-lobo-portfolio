import Image from 'next/image';
import { Reveal, SectionHeading } from '@/app/(common)/components';
import { siteConfig } from '@/app/(common)/constants';
import { Badge } from '@/components/ui/badge';
import { aboutContent } from '../../constants';

const AboutSection = () => (
  <section
    id="sobre"
    className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
  >
    <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="border-gold absolute -top-4 -left-4 h-full w-full rounded-[2rem] border" />
      <Image
        src={aboutContent.image.src}
        alt={aboutContent.image.alt}
        width={aboutContent.image.width}
        height={aboutContent.image.height}
        sizes="(min-width: 1024px) 480px, 90vw"
        className="relative aspect-[3/4] w-full rounded-[2rem] object-cover object-top shadow-lg"
      />
    </Reveal>

    <div className="flex flex-col gap-8">
      <Reveal>
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
        />
      </Reveal>
      <Reveal delay={0.1} className="flex flex-col gap-4">
        {aboutContent.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-muted-foreground text-lg text-pretty"
          >
            {paragraph}
          </p>
        ))}
      </Reveal>
      <Reveal delay={0.15} className="flex flex-wrap gap-2">
        {aboutContent.areas.map((area) => (
          <Badge
            key={area}
            variant="outline"
            className="border-forest/30 text-forest h-auto rounded-full px-3 py-1 text-sm"
          >
            {area}
          </Badge>
        ))}
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-bronze text-sm tracking-[0.2em] uppercase">
          {siteConfig.profession} · {siteConfig.registrationNumber}
        </p>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;
