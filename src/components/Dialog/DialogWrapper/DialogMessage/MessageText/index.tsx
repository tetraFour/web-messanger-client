import React from 'react';

import { IMessageContentType } from 'types';

const MessageText: React.FC<{
  textContent: IMessageContentType['messageText'];
}> = ({ textContent }) => {
  return (
    <div className="message-dialog__bubble">
      <p className="message-dialog__message-text">{textContent}</p>
    </div>
  );
};

export default MessageText;
