import React from 'react';

import { Switch, Route } from 'react-router-dom';

import DialogInput from './DialogInput';
import DialogHeader from './DialogHeader';
import DialogWrapper from './DialogWrapper';

import './style.scss';
import HomeSection from '../HomeSection';

const Message = () => {
  return (
    <section className="message-wrapper">
      <Switch>
        <Route exact path="/home">
          <HomeSection />
        </Route>
        <Route path="/home/:id">
          <DialogHeader />
          <DialogWrapper />
          <DialogInput />
        </Route>
      </Switch>
    </section>
  );
};

export default Message;
