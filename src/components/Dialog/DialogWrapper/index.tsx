import React, { useRef, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';

import { userStore } from 'Store/User';
import { messagesStore } from 'Store/Messages';
import { IMessages } from 'types';

import { checkUser } from 'utils/userChecker';

import DialogMessageContainer from './DialogMessage/DialogMessageContainer';

import './style.scss';

const userGetter = (user: string, partner: string) =>
  `${process.env.REACT_APP_BASE_URL}/api/message/get-messages?user=${user}&partner=${partner}`;

const MessageDialog = observer(() => {
  const { messages, loadMessages } = messagesStore;
  const { userId } = userStore;

  const messageWrapper = useRef<HTMLDivElement>(null);
  const messageDialogWrapper = useRef<HTMLUListElement>(null);

  const { dialogPartnerId } = useParams();

  useEffect(() => {
    messageWrapper!.current!.scrollTop = messageDialogWrapper!.current!.scrollHeight;
  }, [messages]);

  useEffect(() => {
    loadMessages(userGetter(userId, dialogPartnerId));
  }, [dialogPartnerId, loadMessages, userId]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      loadMessages(userGetter(userId, dialogPartnerId));
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [dialogPartnerId, userId, messages, loadMessages]);

  return (
    <div className="message-dialog-wrapper" ref={messageWrapper}>
      <ul className="message-dialog" ref={messageDialogWrapper}>
        {messages.map((message: IMessages) => (
          <li key={message._id}>
            <DialogMessageContainer
              isMe={checkUser(message.user, userId)}
              flag={message.flag}
              content={message.content}
              date={message.date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default MessageDialog;
