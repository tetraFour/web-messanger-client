import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContext } from 'context/AuthContext';

import { useAuth } from 'hooks/auth.hook';

import { useRoutes } from 'routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'store/reducers';

const store = createStore(rootReducer);

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{
          token,
          login,
          logout,
          userId,
          isAuthenticated,
        }}
      >
        <Router>
          <main>{routes}</main>
        </Router>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
