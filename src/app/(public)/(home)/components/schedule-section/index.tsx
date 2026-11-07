import Image from 'next/image';
import { Reveal, SectionHeading } from '@/app/(common)/components';
import { scheduleContent } from '../../constants';
import ScheduleForm from '../schedule-form';

const ScheduleSection = () => (
  <section id="agendamento" className="bg-secondary/60">
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading
            eyebrow={scheduleContent.eyebrow}
            title={scheduleContent.title}
            description={scheduleContent.description}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ScheduleForm />
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative hidden lg:block">
        <div className="bg-gold/30 absolute -right-4 -bottom-4 h-full w-full rounded-[2rem]" />
        <Image
          src={scheduleContent.image.src}
          alt={scheduleContent.image.alt}
          width={scheduleContent.image.width}
          height={scheduleContent.image.height}
          sizes="(min-width: 1024px) 540px, 0px"
          className="relative w-full rounded-[2rem] object-cover shadow-lg"
        />
      </Reveal>
    </div>
  </section>
);

export default ScheduleSection;
