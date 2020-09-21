import { observable, action } from 'mobx';

import axios from 'axios';
import { userStore } from './User';

export class Dialog {
  @observable partnerName: string = '';

  @observable partnerId: string = '';

  @observable isPartnerOnline: string | boolean = false;

  @observable partnerAvatar =
    'https://sun1.cosmostv-by-minsk.userapi.com/RXzP1sxoTrxaXqeSKZ5c0iMVqxDPKaVh5a6IzA/jMfzPRrTl1A.jpg?ava=1';

  // @action setPartnerAction = (data: string, partnerVar: string | boolean) => {
  //   // eslint-disable-next-line no-param-reassign
  //   partnerVar = data;
  // };

  @action fetchPartner = async (url: string) => {
    try {
      const { data } = await axios.get(url, {
        withCredentials: true,
      });
      console.log(data);
      this.setPartnerDataAction(data.id, data.name, data.online, data.avatar);
      // const
    } catch (e) {
      console.log(e);
    }
  };

  @action setPartnerDataAction = (
    partnerId: string,
    partnerName: string,
    partnerIsOnline: string | boolean,
    partnerAvatar: string,
  ) => {
    this.partnerName = partnerName;
    this.partnerId = partnerId;
    this.isPartnerOnline = partnerIsOnline;
    this.partnerAvatar = partnerAvatar;
  };
}

export const dialogStore = new Dialog();
