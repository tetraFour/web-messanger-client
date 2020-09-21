import React from 'react';

import { Popover } from 'antd';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { EllipsisOutlined } from '@ant-design/icons';

import { dialogStore } from 'Store/Dialog';
import DialogHeaderPopoverContent from './DialogHeaderPopoverContent';

import './style.scss';

const urlCreator = (partnerId: string) =>
  `${process.env.REACT_APP_BASE_URL}/api/user/get-partner/${partnerId}`;

const DialogHeader = observer(() => {
  const { dialogPartnerId } = useParams();
  const online = true;

  const { fetchPartner, partnerName } = dialogStore;

  React.useEffect(() => {
    fetchPartner(urlCreator(dialogPartnerId));
  }, [dialogPartnerId, fetchPartner]);

  const { t } = useTranslation();
  return (
    <header className="dialog-header">
      <div className="username-with-status">
        <h4 className="username-with-status__username">{partnerName}</h4>
        <h5
          className={classnames(
            {
              'username-with-status__status username-with-status__status_is-online': online,
            },
            'username-with-status__status',
          )}
        >
          {online ? t('online') : 'был в сети в 23:30'}
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
    </header>
  );
});

export default DialogHeader;
