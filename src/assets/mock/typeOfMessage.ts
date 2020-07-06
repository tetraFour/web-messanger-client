import Sticker from 'assets/images/stickers/cat-pusheen1.webp';

import { FILE, PHOTO, STICKER, TEXT } from 'utils/constans';
import { IMessages } from 'types';

import { photoList } from './photoList';

export const messagesType: IMessages[] = [
  {
    id: 1,
    isMe: false,
    flag: TEXT,
    content: {
      text: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻',
    },
  },
  {
    id: 2,
    isMe: false,
    flag: TEXT,
    content: {
      text:
        'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝',
    },
  },
  {
    id: 3,
    isMe: true,
    flag: TEXT,
    content: {
      text: 'Салам, брат Цезарь!',
    },
  },
  {
    id: 4,
    isMe: true,
    flag: TEXT,
    content: {
      text:
        'Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥',
    },
  },
  {
    id: 5,
    isMe: false,
    flag: FILE,
    content: {
      fileName: 'SideBar.jsx',
      filePath: `${process.env.PUBLIC_URL}shiba.jpg`,
      fileSize: '13 kb.',
    },
  },
  {
    id: 6,
    isMe: true,
    flag: FILE,
    content: {
      fileName: 'SideBar.jsx',
      filePath: `${process.env.PUBLIC_URL}shiba.jpg`,
      fileSize: '13 kb.',
    },
  },
  {
    id: 7,
    isMe: false,
    flag: STICKER,
    content: {
      stickerLink: Sticker,
    },
  },
  {
    id: 8,
    isMe: true,
    flag: FILE,
    content: {
      fileName: 'SideBar.jsx',
      filePath: `${process.env.PUBLIC_URL}shiba.jpg`,
      fileSize: '13 kb.',
    },
  },
  {
    id: 9,
    isMe: false,
    flag: PHOTO,
    content: {
      photoList,
    },
  },
  {
    id: 10,
    isMe: true,
    flag: PHOTO,
    content: {
      photoList,
    },
  },
];
