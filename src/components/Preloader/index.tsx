import React from 'react';

import classnames from 'classnames';

import { Spin } from 'antd';

import './style.scss';

const Preloader: React.FC<{ inner?: boolean }> = ({ inner }) => {
  return (
    <div className={classnames('preloader', inner && 'preloader_inner')}>
      <Spin />
    </div>
  );
};

export default Preloader;
