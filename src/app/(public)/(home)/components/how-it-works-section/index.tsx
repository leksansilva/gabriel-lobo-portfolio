import Image from 'next/image';
import { Reveal, SectionHeading } from '@/app/(common)/components';
import { stepsContent } from '../../constants';

const HowItWorksSection = () => (
  <section
    id="como-funciona"
    className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16"
  >
    <Reveal className="relative order-last lg:order-first">
      <div className="bg-forest/10 absolute -bottom-4 -left-4 h-full w-full rounded-[2rem]" />
      <Image
        src={stepsContent.image.src}
        alt={stepsContent.image.alt}
        width={stepsContent.image.width}
        height={stepsContent.image.height}
        sizes="(min-width: 1024px) 540px, 90vw"
        className="relative w-full rounded-[2rem] object-cover shadow-lg"
      />
    </Reveal>

    <div className="flex flex-col gap-10">
      <Reveal>
        <SectionHeading
          eyebrow={stepsContent.eyebrow}
          title={stepsContent.title}
          description={stepsContent.description}
        />
      </Reveal>
      <ol className="flex flex-col gap-6">
        {stepsContent.items.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <li className="flex gap-5">
              <span className="border-gold text-bronze font-heading flex size-11 shrink-0 items-center justify-center rounded-full border text-xl font-semibold">
                {index + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-forest text-2xl">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorksSection;
