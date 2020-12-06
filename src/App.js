import React from 'react';
import { Router } from '@reach/router';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './components/helpers/AuthContext';
import { LoadingProvider } from './components/helpers/LoadingContext';
import PrivateRoute from './components/helpers/PrivateRoute';
import MyPasswords from './components/MyPasswords';
import Logout from './components/helpers/Logout';

const App = () => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <Router>
          <Signup path={'/signup'} />
          <Login path={'/login'} />
          <Logout path={'/logout'} />
          <PrivateRoute component={MyPasswords} path={'/'} />
        </Router>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default App;
