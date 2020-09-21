// eslint-disable-next-line import/no-duplicates
import { format } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { ru } from 'date-fns/locale';

const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isYesterday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() - 1 &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const getDate = (date: Date) => {
  if (isToday(date)) {
    return format(date, 'сегодня HH:mm', { locale: ru });
  }
  if (isYesterday(date)) {
    return format(date, 'вчера HH:mm', { locale: ru });
  }
  return format(date, 'dd MMMM HH:mm', { locale: ru });
};
