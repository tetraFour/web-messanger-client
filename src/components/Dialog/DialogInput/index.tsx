import React, { useState, useCallback } from 'react';

import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';

import { messagesStore } from 'Store/Messages';
import { userStore } from 'Store/User';

import { TEXT } from 'utils/constans';

import DialogInputStickers from './DialogInputStickers';
import DialogInputUpload from './DialogInputUpload';
import DialogInputPhoto from './DialogInputPhoto';
import DialogInputVoice from './DialogInputVoice';
import DialogInputTextInput from './DialogInputTextInput';
import DialogInputSubmitButton from './DialogInputSubmitButton';

import './style.scss';

const URL = `${process.env.REACT_APP_BASE_URL}/api/message/send-message`;

const DialogInput = observer(() => {
  const { dialogPartnerId } = useParams();
  const [messageText, setMessageText] = useState<string>('');

  const { sendMessage } = messagesStore;
  const { userId } = userStore;

  // if u try to switch dialog - clear messageText value
  React.useEffect(() => {
    setMessageText('');
  }, [dialogPartnerId]);

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessageText(event.target.value);
    },
    [],
  );

  const submitHandler = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (messageText.length) {
        try {
          sendMessage(URL, {
            user: userId,
            flag: TEXT,
            content: { messageText },
            partner: dialogPartnerId,
            date: new Date(),
            isMe: true,
          });

          console.log('well done');
        } catch (e) {
          console.log(e);
        }
        setMessageText('');
      }
    },
    [dialogPartnerId, messageText, sendMessage, userId],
  );

  return (
    <form className="dialog-input-wrapper" onSubmit={submitHandler}>
      <div className="dialog-input-wrapper__custom-input-wrapper">
        <DialogInputStickers />
        <DialogInputTextInput
          changeHandler={changeHandler}
          messageText={messageText}
        />
        <DialogInputUpload />
        <DialogInputPhoto />
        <DialogInputVoice />
        <DialogInputSubmitButton />
      </div>
    </form>
  );
});

export default DialogInput;
