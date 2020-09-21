import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Hero = () => (
  <section className="hero-page">
    <div className="container">
      <Link to="/sign-in">Войти</Link>
      <Link to="/sign-up">Зарегистрироваться</Link>
    </div>
  </section>
);
export default Hero;
