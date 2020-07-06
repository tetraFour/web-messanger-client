import React from 'react';
import {
  SmileOutlined,
  AudioOutlined,
  SendOutlined,
  CameraOutlined,
} from '@ant-design/icons';

import './style.scss';

const DialogInput = () => {
  return (
    <div className="dialog-input-wrapper">
      <div className="dialog-input-wrapper__custom-input-wrapper">
        <button
          type="button"
          className="dialog-input-wrapper__controller dialog-input-wrapper__controller_sticker"
        >
          <SmileOutlined style={{ fontSize: '20px' }} />
        </button>
        <input
          type="text"
          placeholder="Введите текст сообщения…"
          className="dialog-input-wrapper__custom-input"
        />

        <button
          type="button"
          className="dialog-input-wrapper__controller dialog-input-wrapper__controller_upload"
        >
          <CameraOutlined style={{ fontSize: '20px' }} />
        </button>
        <button
          type="button"
          className="dialog-input-wrapper__controller dialog-input-wrapper__controller_voice"
        >
          <AudioOutlined style={{ fontSize: '20px' }} />
        </button>
        <button
          type="button"
          className="dialog-input-wrapper__controller dialog-input-wrapper__controller_send"
        >
          <SendOutlined style={{ fontSize: '20px' }} />
        </button>
      </div>
    </div>
  );
};

export default DialogInput;
