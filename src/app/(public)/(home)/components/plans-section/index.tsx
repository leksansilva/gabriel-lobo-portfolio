import Link from 'next/link';
import { Check } from 'lucide-react';
import { Reveal, SectionHeading } from '@/app/(common)/components';
import { whatsappLink } from '@/app/(common)/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { plansContent } from '../../constants';

const PlansSection = () => (
  <section id="planos" className="bg-secondary/60">
    <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow={plansContent.eyebrow}
          title={plansContent.title}
          description={plansContent.description}
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plansContent.items.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.1} className="h-full">
            <article
              className={cn(
                'bg-card flex h-full flex-col gap-6 rounded-3xl border p-8',
                plan.isHighlighted &&
                  'bg-forest text-ivory border-forest shadow-xl'
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h3
                    className={cn(
                      'text-3xl',
                      plan.isHighlighted ? 'text-ivory' : 'text-forest'
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      'text-sm',
                      plan.isHighlighted ? 'text-gold' : 'text-bronze'
                    )}
                  >
                    {plan.consultations} · {plan.duration}
                  </p>
                </div>
                {plan.isHighlighted ? (
                  <Badge className="bg-gold text-charcoal">
                    Mais escolhido
                  </Badge>
                ) : null}
              </div>
              <p
                className={cn(
                  'text-pretty',
                  plan.isHighlighted ? 'text-ivory/80' : 'text-muted-foreground'
                )}
              >
                {plan.description}
              </p>
              <ul className="flex flex-1 flex-col gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="text-gold size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={plan.isHighlighted ? 'secondary' : 'default'}
                className={cn(
                  'h-11 rounded-full',
                  plan.isHighlighted && 'bg-ivory text-forest hover:bg-ivory/90'
                )}
              >
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plansContent.action.label}
                </Link>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm">
        {plansContent.disclaimer}
      </p>
    </div>
  </section>
);

export default PlansSection;
