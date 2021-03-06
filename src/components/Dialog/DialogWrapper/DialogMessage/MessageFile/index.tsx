import React from 'react';

import { useTranslation } from 'react-i18next';

import { FileOutlined, DownloadOutlined } from '@ant-design/icons';

import { IMessageContentType } from 'types';

const MessageFile: React.FC<{
  fileName: IMessageContentType['fileName'];
  fileSize: IMessageContentType['fileSize'];
  filePath: IMessageContentType['filePath'];
}> = ({ fileName, filePath, fileSize }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="message-dialog__file-wrapper">
        <div className="message-dialog__file">
          <h5 className="message-dialog__file-title">{fileName}</h5>
          <h6 className="message-dialog__file-subtitle">
            {t('fileSize')} {fileSize}
          </h6>
          <FileOutlined className="message-dialog__file-icon" />
        </div>
        <div className="message-dialog__file-link">
          <DownloadOutlined className="message-dialog__file-link-icon" />

          <a href={filePath} download>
            {t('download')}
          </a>
        </div>
      </div>
    </>
  );
};

export default MessageFile;
