export const buildWhatsAppLink = (phoneNumber: string, message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
