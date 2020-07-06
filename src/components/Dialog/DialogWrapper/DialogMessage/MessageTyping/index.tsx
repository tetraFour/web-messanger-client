import React from 'react';

const MessageTyping: React.FC = () => {
  return (
    <li className="message-dialog__item-wrapper">
      <div className="message-dialog__item message-dialog__item">
        <button type="button" className="message-dialog__avatar-wrapper">
          <img
            className="message-dialog__avatar"
            src={`${process.env.PUBLIC_URL}/shiba.jpg`}
            alt="username-avatar"
          />
        </button>
        <div className="message-dialog__message-wrapper message-dialog__message-wrapper_typing">
          <div className="message-dialog__message-typing">
            <p className="message-dialog__username-typing">
              Гай набрает сообщение{' '}
              <span className="paragraph">
                <span className="typing">...</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageTyping;
