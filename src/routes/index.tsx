import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from 'pages/Home/Home.page';
import Hero from 'pages/Hero/Hero.page';

import PublicRoute from 'routes/PublicRoute';
import AuthRoute from 'routes/AuthRoute';

import SignIn from 'components/Auth/SignIn';
import SignUp from 'components/Auth/SignUp';
import Confirmation from 'components/Auth/Confirmation';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/home" Component={Home} />
        <PublicRoute path="/confirm" exact Component={Confirmation} />
        <PublicRoute path="/sign-in" Component={SignIn} />
        <PublicRoute path="/sign-up" Component={SignUp} />
        <PublicRoute path="/" exact Component={Hero} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
