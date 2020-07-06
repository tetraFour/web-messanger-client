import React from 'react';

import { Popover } from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';

import DialogHeaderPopoverContent from './DialogHeaderPopoverContent';

import './style.scss';

const DialogHeader = () => {
  return (
    <div className="dialog-header">
      <div className="username-with-status">
        <h4 className="username-with-status__username">Гай Юлий Цезарь</h4>
        <h5 className="username-with-status__status username-with-status__status_is-online">
          онлайн
        </h5>
      </div>
      <Popover
        placement="bottomRight"
        content={DialogHeaderPopoverContent}
        trigger="click"
      >
        <button type="button" className="dialog-header__controller">
          <EllipsisOutlined style={{ fontSize: '20px' }} />
        </button>
      </Popover>
    </div>
  );
};

export default DialogHeader;
