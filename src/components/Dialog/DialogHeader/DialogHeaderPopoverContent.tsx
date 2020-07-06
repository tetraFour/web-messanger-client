import React from 'react';

import {
  DeleteOutlined,
  InfoCircleOutlined,
  EditOutlined,
} from '@ant-design/icons';

const PopoverContent = () => (
  <ul className="dialog-header__controller-inputs-list">
    <li className="dialog-header__controller-inputs-list-item">
      <button type="button">
        <InfoCircleOutlined />
        информация
      </button>
    </li>
    <li className="dialog-header__controller-inputs-list-item">
      <button type="button">
        <DeleteOutlined />
        удалить чат
      </button>
    </li>
    <li className="dialog-header__controller-inputs-list-item">
      <button type="button">
        <EditOutlined />
        редактирование
      </button>
    </li>
  </ul>
);

export default PopoverContent;
