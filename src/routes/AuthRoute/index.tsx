import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IRouteProps } from 'types';

const AuthRoute: React.FC<IRouteProps> = ({ Component, exact, path }) => {
  const isAuth = !!localStorage.getItem('user_main_info');

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        isAuth ? (
          <main>
            <Component />
          </main>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AuthRoute;
