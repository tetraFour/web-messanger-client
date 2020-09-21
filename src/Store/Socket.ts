import { observable, action } from 'mobx';
import io from 'socket.io-client';

class Socket {
  @observable connection: boolean = false;

  @observable socket: any;

  @action socketConnection = () => {
    this.socket = io(`${process.env.REACT_APP_BASE_URL}`);
    if (this.socket) {
      console.log('SOCKET: socket has been connected!');
    }
    this.connection = this.socket.connected;
  };

  @action socketDisconnection = () => {
    console.log('SOCKET: socket has been disconnected!');
    this.socket.disconnect();
    this.connection = false;
  };
}

export const socketStore = new Socket();
