import { observable, action, toJS } from 'mobx';

import axios from 'axios';

import { userStore } from './User';

interface IPosts {
  _id: string;
  name: string;
  avatar: string;
}

export class Posts {
  @observable postList: IPosts[] = [];

  @observable userId = userStore.userId;

  @observable listStatus = '';

  get posts(): IPosts[] {
    return toJS(this.postList);
  }

  @action loadPosts = async (url: string) => {
    try {
      const { data } = await axios.get(url, {
        withCredentials: true,
      });
      this.setPostsAction(data);
      console.log('posts', data);
    } catch (e) {
      console.log(e);
    }
  };

  @action searchUserByNickname = async (url: string) => {
    try {
      const { data } = await axios.get(url, {
        withCredentials: true,
      });
      this.setPostsAction(data);
    } catch (e) {
      console.log(e);
    }
  };

  @action setPostsAction = (result: IPosts[]) => {
    this.postList = result;
  };
}

export const postsStore = new Posts();
