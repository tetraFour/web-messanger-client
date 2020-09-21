import React from 'react';

import classnames from 'classnames';

import {
  MessageFile,
  MessageSticker,
  MessageText,
  MessagePhoto,
} from 'components/Dialog/DialogWrapper/DialogMessage';

import { IMessageContentType } from 'types';

import { FILE, PHOTO, STICKER, TEXT } from 'utils/constans';
import { getDate } from 'utils/getDate';
import { userStore } from 'Store/User';
import { dialogStore } from 'Store/Dialog';
import { getUserPic } from 'utils/getUserPic';

function getContent(messageFlag: string, innerContent: IMessageContentType) {
  let finallyComponent;
  switch (messageFlag) {
    case TEXT:
      finallyComponent = innerContent && (
        <MessageText textContent={innerContent.messageText} />
      );
      break;
    case FILE:
      finallyComponent = innerContent && (
        <MessageFile
          fileSize={innerContent.fileSize}
          filePath={innerContent.filePath}
          fileName={innerContent.fileName}
        />
      );
      break;
    case STICKER:
      finallyComponent = innerContent && (
        <MessageSticker stickerLink={innerContent.stickerLink} />
      );
      break;
    case PHOTO:
      finallyComponent = innerContent && (
        <MessagePhoto photoList={innerContent.photoList} />
      );
      break;
    default:
      break;
  }
  return finallyComponent;
}

const DialogMessageContainer: React.FC<{
  isMe: boolean;
  content: IMessageContentType;
  flag: string;
  date: Date;
}> = ({ isMe, content, flag, date }) => {
  const { avatar } = userStore;
  const { partnerAvatar } = dialogStore;

  return (
    <div
      className={classnames(
        'message-dialog__item-wrapper message-dialog__item-wrapper_hover',

        {
          'message-dialog__item-wrapper_me message-dialog__item-wrapper_hover_me': isMe,
        },
      )}
    >
      <div className="message-dialog__item message-dialog__item">
        <button type="button" className="message-dialog__avatar-wrapper">
          {avatar ? (
            <img
              className="message-dialog__avatar"
              src={getUserPic(isMe, avatar, partnerAvatar)}
              alt="username-avatar"
            />
          ) : (
            <div className="message-dialog__avatar" />
          )}
        </button>
        <div className="message-dialog__message-wrapper">
          {getContent(flag, content)}
          <span className="message-dialog__date">
            {getDate(new Date(date))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogMessageContainer;
