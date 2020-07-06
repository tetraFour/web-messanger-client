import React from 'react';

import { Typography } from 'antd';

import './style.scss';

const { Title } = Typography;

const HomeSection = () => {
  return (
    <section className="home">
      <Title>Выберите диалог</Title>
    </section>
  );
};

export default HomeSection;
