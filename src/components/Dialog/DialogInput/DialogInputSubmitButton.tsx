import React from 'react';

import { SendOutlined } from '@ant-design/icons';

const DialogInputSubmitButton = () => {
  return (
    <button
      type="submit"
      className="dialog-input-wrapper__controller dialog-input-wrapper__controller_send"
    >
      <SendOutlined style={{ fontSize: '20px' }} />
    </button>
  );
};

export default DialogInputSubmitButton;
