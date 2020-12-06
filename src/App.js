import React from 'react';
import { Router } from '@reach/router';
import Login from './components/Login';
import { firebaseInit } from './utils/auth';

const App = () => {
  firebaseInit();

  return (
    <Router>
      <Login path={'/'} />
    </Router>
  );
};

export default App;
