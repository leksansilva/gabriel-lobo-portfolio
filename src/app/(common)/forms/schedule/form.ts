'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { siteConfig } from '../../constants';
import { buildWhatsAppLink } from '../../utils';
import { scheduleSchema, type scheduleFormData } from './schema';

export const useScheduleForm = () => {
  const form = useForm<scheduleFormData>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: { name: '', phone: '', goal: '' },
  });

  const onSubmit = (data: scheduleFormData) => {
    const message = `Olá, Gabriel! Me chamo ${data.name} e quero agendar uma consulta.\nMeu WhatsApp: ${data.phone}\nObjetivo: ${data.goal}`;
    window.open(
      buildWhatsAppLink(siteConfig.whatsappNumber, message),
      '_blank',
      'noopener,noreferrer'
    );
    toast.success('Abrindo o WhatsApp para concluir o agendamento.');
    form.reset();
  };

  return { form, onSubmit };
};
