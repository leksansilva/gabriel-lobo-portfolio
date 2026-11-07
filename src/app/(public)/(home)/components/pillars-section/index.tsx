import { Reveal, SectionHeading } from '@/app/(common)/components';
import { Card, CardContent } from '@/components/ui/card';
import { pillarsContent } from '../../constants';

const PillarsSection = () => (
  <section
    id="acompanhamento"
    className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24"
  >
    <Reveal>
      <SectionHeading
        eyebrow={pillarsContent.eyebrow}
        title={pillarsContent.title}
        description={pillarsContent.description}
      />
    </Reveal>
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {pillarsContent.items.map((pillar, index) => (
        <Reveal key={pillar.title} delay={index * 0.1}>
          <Card className="h-full rounded-3xl border-none shadow-sm">
            <CardContent className="flex flex-col gap-4 py-2">
              <span className="bg-forest text-ivory flex size-12 items-center justify-center rounded-2xl">
                <pillar.icon className="size-5" />
              </span>
              <h3 className="text-forest text-2xl">{pillar.title}</h3>
              <p className="text-muted-foreground text-pretty">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  </section>
);

export default PillarsSection;
