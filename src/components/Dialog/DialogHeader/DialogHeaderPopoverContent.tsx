import React from 'react';

import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  DeleteOutlined,
  InfoCircleOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { userStore } from 'Store/User';

const PopoverContent = () => {
  const { exitFromAccount } = userStore;

  const history = useHistory();

  const handleClickExitFromAcc = () => {
    exitFromAccount();
    history.push('/sign-in');
  };

  const { t } = useTranslation();
  return (
    <ul className="dialog-header__controller-inputs-list">
      <li className="dialog-header__controller-inputs-list-item">
        <button type="button">
          <InfoCircleOutlined />
          {t('info')}
        </button>
      </li>
      <li className="dialog-header__controller-inputs-list-item">
        <button type="button">
          <EditOutlined />
          {t('editDialog')}
        </button>
      </li>
      <li className="dialog-header__controller-inputs-list-item">
        <button type="button" onClick={handleClickExitFromAcc}>
          <DeleteOutlined />
          {t('deleteDialog')}
        </button>
      </li>
    </ul>
  );
};

export default PopoverContent;
