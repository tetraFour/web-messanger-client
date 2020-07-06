import React from 'react';

import { IMessageContentType } from 'types';

const MessageSticker: React.FC<{
  stickerLink: IMessageContentType['stickerLink'];
}> = ({ stickerLink }) => {
  return (
    <img className="message-dialog__sticker" src={stickerLink} alt="sticker" />
  );
};

export default MessageSticker;
