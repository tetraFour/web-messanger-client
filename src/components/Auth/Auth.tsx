import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Confirmation from './Confirmation';

const Auth = () => {
  return (
    <>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </>
  );
};

export default Auth;
