import React from 'react';

import { InfoCircleTwoTone } from '@ant-design/icons';

const Confirmation = () => {
  return (
    <>
      <div className="auth">
        <div className="form-wrapper">
          <InfoCircleTwoTone className="confirm-icon" />
          <h3 className="confirm-title">Подтвердите свой аккаунт</h3>
          <p className="confirm-sub-title">
            На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
          </p>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
