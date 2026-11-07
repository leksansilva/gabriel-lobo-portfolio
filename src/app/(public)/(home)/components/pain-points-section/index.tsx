import { Reveal, SectionHeading } from '@/app/(common)/components';
import { painPointsContent } from '../../constants';

const PainPointsSection = () => (
  <section id="dores" className="bg-forest text-ivory">
    <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <SectionHeading
          tone="ivory"
          eyebrow={painPointsContent.eyebrow}
          title={painPointsContent.title}
          description={painPointsContent.description}
        />
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {painPointsContent.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <li className="border-ivory/15 bg-ivory/5 flex h-full gap-4 rounded-2xl border p-5">
              <span className="text-gold mt-0.5 shrink-0">
                <item.icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans text-base font-medium tracking-normal">
                  {item.title}
                </h3>
                <p className="text-ivory/75 text-sm">{item.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default PainPointsSection;
