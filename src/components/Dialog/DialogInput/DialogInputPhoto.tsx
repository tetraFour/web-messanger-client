import React from 'react';

import { CameraOutlined } from '@ant-design/icons';

const DialogInputPhoto = () => {
  return (
    <button
      type="button"
      className="dialog-input-wrapper__controller dialog-input-wrapper__controller_upload"
    >
      <CameraOutlined style={{ fontSize: '20px' }} />
    </button>
  );
};

export default DialogInputPhoto;
