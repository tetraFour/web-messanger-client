import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IRouteProps } from 'types';

const PublicRoute: React.FC<IRouteProps> = ({ Component, exact, path }) => {
  // if (localStorage.getItem('user_main_info')) {
  //
  //   console.log('qweqwe');
  //   return <Redirect to="/" />;
  // }

  const isAuth = !!localStorage.getItem('user_main_info');
  console.log(isAuth, 333);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isAuth ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
