import React from 'react';

import { Switch, Route } from 'react-router-dom';

import DialogInput from './DialogInput';
import DialogHeader from './DialogHeader';
import DialogWrapper from './DialogWrapper';

import './style.scss';

const Message = () => {
  return (
    <section className="message-wrapper">
      <Switch>
        <Route path="/home/:dialogPartnerId">
          <DialogHeader />
          <DialogWrapper />
          <DialogInput />
        </Route>
      </Switch>
    </section>
  );
};

export default Message;
