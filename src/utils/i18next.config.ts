import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      online: 'online',
      dialogList: 'Dialog list',
      fileSize: 'File size:',
      download: 'Download',
      findContact: 'Search user',
      writeMessage: 'Enter your message...',
      info: 'Info',
      deleteDialog: 'Delete dialog',
      editDialog: 'Edit',
    },
  },
  ru: {
    translation: {
      online: 'онлайн',
      dialogList: 'Список диалогов',
      fileSize: 'Размер:',
      download: 'Скачать',
      findContact: 'Поиск среди контактов',
      writeMessage: 'Введите текст сообщения…',
      info: 'Информация',
      deleteDialog: 'Удалить диалог',
      editDialog: 'Редактирование',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
