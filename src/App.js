import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Login path={'/'} />
    </Router>
  );
};

export default App;
