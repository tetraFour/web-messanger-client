import React from 'react';

import classnames from 'classnames';

import { IMessages, IMessageContentType } from 'types';
import {
  MessageFile,
  MessageSticker,
  MessageText,
  MessagePhoto,
} from 'components/Dialog/DialogWrapper/DialogMessage';

import { FILE, PHOTO, STICKER, TEXT } from 'utils/constans';

function getContent(messageFlag: string, innerContent: IMessageContentType) {
  // function getContent(messageFlag: string, innerContent: any) {
  let finallyComponent;
  switch (messageFlag) {
    case TEXT:
      finallyComponent = innerContent && (
        <MessageText textContent={innerContent.text} />
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

const DialogMessageContainer: React.FC<IMessages> = ({
  isMe,
  children,
  content,
  flag,
}) => {
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
          <img
            className="message-dialog__avatar"
            src={`${process.env.PUBLIC_URL}/shiba.jpg`}
            alt="username-avatar"
          />
        </button>
        <div className="message-dialog__message-wrapper">
          {getContent(flag, content)}
          <span className="message-dialog__date">Вчера, в 12:31</span>
        </div>
      </div>
    </div>
  );
};

export default DialogMessageContainer;
