import React, { useState } from 'react';

import { Button, Modal, Upload } from 'antd';
import { FileAddOutlined, UploadOutlined } from '@ant-design/icons';

const DialogInputUpload = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenModal = () => {
    setIsVisible(true);
  };
  const handleConfirmModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Modal
        title="Загрузить файл"
        visible={isVisible}
        okText="Отправить"
        cancelText="Отменить"
        onOk={handleConfirmModal}
        onCancel={handleConfirmModal}
      >
        <Upload multiple={false}>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
      </Modal>
      <button
        onClick={handleOpenModal}
        type="button"
        className="dialog-input-wrapper__controller dialog-input-wrapper__controller_upload"
      >
        <FileAddOutlined style={{ fontSize: '20px' }} />
      </button>
    </>
  );
};

export default DialogInputUpload;
