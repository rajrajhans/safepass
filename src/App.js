import React from 'react';
import { Router } from '@reach/router';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Login path={'/'} />
    </Router>
  );
};

export default App;
