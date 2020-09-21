import { observable, action, toJS, autorun } from 'mobx';

import axios from 'axios';

import { IMessages } from 'types';

import { userStore } from './User';
import { socketStore } from './Socket';

export class Messages {
  @observable messageList: IMessages[] = [];

  @observable lastMessage: IMessages | {} = {};

  @observable userId = userStore.userId;

  @observable socket = socketStore.socket;

  @observable connection = socketStore.connection;

  get messages(): IMessages[] {
    return toJS(this.messageList);
  }

  get newMessage(): IMessages | {} {
    return toJS(this.lastMessage);
  }

  constructor() {
    autorun(() => {
      console.log('SOCKET IS ', this.socket);
      this.setSocketAction(socketStore.socket);
    });
  }

  @action setSocketAction = (socketData: any) => {
    this.socket = socketData;
  };

  @action loadMessages = async (url: string) => {
    const { data } = await axios.get(url, {
      withCredentials: true,
    });
    this.setLastMessageAction(data[data.length]);
    this.setMessagesAction(data);
  };

  @action setMessagesAction = (result: IMessages[]) => {
    this.messageList = result;
  };

  @action setLastMessageAction = (result: IMessages) => {
    this.lastMessage = result;
  };

  @action sendMessage = async (url: string, data: IMessages) => {
    this.messageList.push(data);
    await axios.post(url, data, {
      withCredentials: true,
    });
    // console.log(this.socket, this.connection);
    this.socket.on('message', (data: any) => {
      console.log('DATA', data);
    });
  };
}

export const messagesStore = new Messages();
