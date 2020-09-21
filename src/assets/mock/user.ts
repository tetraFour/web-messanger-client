type USER_TYPE = {
  id: number;
  userPhoto: string;
  userName: string;
  userEmail: string;
  userIsOnline: boolean;
  isTyping: boolean;
};

export const USER: USER_TYPE = {
  id: 1231231213,
  userName: 'Артем',
  userEmail: 'artem131999@gmail.com',
  userPhoto: `${process.env.PUBLIC_URL}/shiba.jpg`,
  userIsOnline: true,
  isTyping: false,
};
