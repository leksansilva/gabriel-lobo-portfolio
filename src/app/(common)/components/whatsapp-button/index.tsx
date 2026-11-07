import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../constants';

const WhatsAppButton = () => (
  <Link
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    data-testid="whatsapp-floating-button"
    className="bg-forest text-ivory ring-gold/60 hover:bg-forest/90 focus-visible:ring-gold fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full shadow-lg ring-1 transition-colors outline-none focus-visible:ring-2"
  >
    <MessageCircle className="size-6" />
  </Link>
);

export default WhatsAppButton;
