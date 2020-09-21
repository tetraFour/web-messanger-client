import { action, observable } from 'mobx';
import axios from 'axios';
import { FormControl } from 'types';

interface IUser {
  login: string;
  password: string;
}
// https://cdn.discordapp.com/avatars/305270321311907840/a0fcf9f3b8fa109cb3eb1a32e18df4d3.png?size=256

export class User {
  constructor() {
    localStorage.getItem('user_main_info') &&
      this.setUserIdAction(localStorage.getItem('user_main_info') as string);
  }

  @observable userId = '';

  @observable avatar = '';

  @observable partnerAvatar =
    'https://sun1.cosmostv-by-minsk.userapi.com/RXzP1sxoTrxaXqeSKZ5c0iMVqxDPKaVh5a6IzA/jMfzPRrTl1A.jpg?ava=1';

  @action
  setUserIdAction = (user: string) => {
    this.userId = user;
  };

  @action
  setUserAvatarAction = (avatar: string) => {
    this.avatar = avatar;
  };

  @action
  loadUser = async ({ login, password }: IUser) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/auth/sign-in`,
      {
        login,
        password,
      },
      {
        withCredentials: true,
      },
    );

    console.log('data', data);

    localStorage.setItem('user_main_info', data.userId);
    this.setUserIdAction(data.userId);
    this.setUserAvatarAction(data.avatar);
  };

  @action
  createUser = async (form: FormControl) => {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/sign-up`, {
      ...form,
    });
  };

  @action
  exitFromAccount = async () => {
    this.userId = '';
    localStorage.removeItem('user_main_info');
    await axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth/logout`, {
      withCredentials: true,
    });
  };
}

export const userStore = new User();
