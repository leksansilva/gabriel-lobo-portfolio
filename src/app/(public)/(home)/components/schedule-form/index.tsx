'use client';

import { ArrowRight } from 'lucide-react';
import { useScheduleForm } from '@/app/(common)/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { scheduleContent } from '../../constants';

const ScheduleForm = () => {
  const { form, onSubmit } = useScheduleForm();
  const { errors, isSubmitting } = form.formState;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="bg-card flex flex-col gap-5 rounded-3xl border p-6 md:p-8"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="schedule-name">Nome</Label>
        <Input
          id="schedule-name"
          placeholder="Como você gostaria de ser chamado"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          data-testid="schedule-name"
          {...form.register('name')}
        />
        {errors.name ? (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="schedule-phone">WhatsApp</Label>
        <Input
          id="schedule-phone"
          type="tel"
          inputMode="tel"
          placeholder="(00) 00000-0000"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          data-testid="schedule-phone"
          {...form.register('phone')}
        />
        {errors.phone ? (
          <p className="text-destructive text-sm">{errors.phone.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="schedule-goal">Qual é o seu objetivo?</Label>
        <Textarea
          id="schedule-goal"
          rows={4}
          placeholder="Ex.: quero emagrecer sem passar fome e ter mais energia no dia a dia"
          aria-invalid={Boolean(errors.goal)}
          data-testid="schedule-goal"
          {...form.register('goal')}
        />
        {errors.goal ? (
          <p className="text-destructive text-sm">{errors.goal.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 rounded-full text-base"
        disabled={isSubmitting}
        data-testid="schedule-submit"
      >
        {scheduleContent.submitLabel}
        <ArrowRight data-icon="inline-end" />
      </Button>
    </form>
  );
};

export default ScheduleForm;
