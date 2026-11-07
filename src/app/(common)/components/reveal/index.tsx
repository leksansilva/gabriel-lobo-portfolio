'use client';

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
