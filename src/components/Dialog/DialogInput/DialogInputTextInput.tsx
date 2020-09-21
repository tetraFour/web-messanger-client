import React, { useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

const DialogInputTextInput: React.FC<{
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  messageText: string;
}> = ({ changeHandler, messageText }) => {
  const { t } = useTranslation();

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input!.current!.focus();
  }, []);
  return (
    <input
      onChange={changeHandler}
      type="text"
      ref={input}
      value={messageText}
      placeholder={t('writeMessage')}
      className="dialog-input-wrapper__custom-input"
    />
  );
};

export default DialogInputTextInput;
