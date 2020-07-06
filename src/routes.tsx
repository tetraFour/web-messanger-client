import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Preloader from 'components/Preloader';

const HomePage = lazy(() => import('pages/Home/Home.page'));
const AuthPage = lazy(() => import('pages/Auth/Auth.page'));

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path="/">
          <AuthPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};
