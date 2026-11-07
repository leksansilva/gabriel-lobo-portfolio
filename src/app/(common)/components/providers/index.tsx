'use client';

import type { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getQueryClient } from '../../libs';

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>{children}</TooltipProvider>
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
