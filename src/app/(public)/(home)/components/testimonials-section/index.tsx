import { Quote } from 'lucide-react';
import { Reveal, SectionHeading } from '@/app/(common)/components';
import { testimonialsContent } from '../../constants';

const TestimonialsSection = () => (
  <section id="depoimentos" className="bg-forest text-ivory">
    <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <SectionHeading
          tone="ivory"
          align="center"
          eyebrow={testimonialsContent.eyebrow}
          title={testimonialsContent.title}
        />
      </Reveal>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonialsContent.items.map((testimonial, index) => (
          <Reveal key={`${testimonial.name}-${index}`} delay={index * 0.1}>
            <li className="border-ivory/15 bg-ivory/5 flex h-full flex-col gap-5 rounded-3xl border p-7">
              <Quote className="text-gold size-6" />
              <blockquote className="font-heading flex-1 text-xl text-pretty italic">
                {testimonial.quote}
              </blockquote>
              <footer className="flex flex-col gap-0.5 text-sm">
                <span className="font-medium">{testimonial.name}</span>
                <span className="text-ivory/70">{testimonial.context}</span>
              </footer>
            </li>
          </Reveal>
        ))}
      </ul>
      <p className="text-ivory/60 mt-8 text-center text-sm">
        {testimonialsContent.disclaimer}
      </p>
    </div>
  </section>
);

export default TestimonialsSection;
