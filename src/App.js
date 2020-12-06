import React from 'react';
import { Router } from '@reach/router';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './components/helpers/AuthContext';
import PrivateRoute from './components/helpers/PrivateRoute';
import MyPasswords from './components/MyPasswords';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Login path={'/login'} />
        <Signup path={'/signup'} />
        <PrivateRoute component={MyPasswords} path={'/'} />
      </Router>
    </AuthProvider>
  );
};

export default App;
