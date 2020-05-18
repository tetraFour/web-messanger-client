import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/Home/Home.page";
import AuthPage from "./pages/Auth/Auth.page";

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
