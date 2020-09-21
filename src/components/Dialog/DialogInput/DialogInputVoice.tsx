import React from 'react';

import { AudioOutlined } from '@ant-design/icons';

const DialogInputVoice = () => {
  return (
    <button
      type="button"
      className="dialog-input-wrapper__controller dialog-input-wrapper__controller_voice"
    >
      <AudioOutlined style={{ fontSize: '20px' }} />
    </button>
  );
};

export default DialogInputVoice;
