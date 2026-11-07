import { Reveal, SectionHeading } from '@/app/(common)/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqContent } from '../../constants';

const FaqSection = () => (
  <section
    id="duvidas"
    className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[0.8fr_1.2fr]"
  >
    <Reveal>
      <SectionHeading eyebrow={faqContent.eyebrow} title={faqContent.title} />
    </Reveal>
    <Reveal delay={0.1}>
      <Accordion type="single" collapsible className="gap-2">
        {faqContent.items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="bg-card rounded-2xl border px-5 not-last:border-b"
          >
            <AccordionTrigger
              className="text-forest py-4 text-base font-medium hover:no-underline"
              data-testid={`faq-trigger-${index}`}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  </section>
);

export default FaqSection;
