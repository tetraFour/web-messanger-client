import React, { useRef, useEffect } from 'react';

import { messagesType } from 'assets/mock/typeOfMessage';

// import { MessageContentType } from 'types';

import { MessageTyping } from './DialogMessage';

import DialogMessageContainer from './DialogMessage/DialogMessageContainer';

import './style.scss';

const MessageDialog = () => {
  // scroll at the end of the dialog
  const messageWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messageWrapper && messageWrapper.current) {
      messageWrapper.current.scrollTop = messageWrapper.current.scrollHeight;
    }
  }, []);

  return (
    <div className="message-dialog-wrapper" ref={messageWrapper}>
      <ul className="message-dialog">
        {messagesType.map((message) => (
          <li key={message.id}>
            <DialogMessageContainer
              isMe={message.isMe}
              flag={message.flag}
              content={message.content}
            />
          </li>
        ))}
        <MessageTyping />
      </ul>
    </div>
  );
};

export default MessageDialog;
