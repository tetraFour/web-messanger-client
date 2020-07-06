import React from 'react';

import { Spin } from 'antd';

import './style.scss';

const Preloader = () => {
  return (
    <div className="preloader">
      <Spin />
    </div>
  );
};

export default Preloader;
