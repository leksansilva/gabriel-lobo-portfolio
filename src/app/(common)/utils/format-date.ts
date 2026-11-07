export const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }
) => new Intl.DateTimeFormat('pt-BR', options).format(new Date(date));
