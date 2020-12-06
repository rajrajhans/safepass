import React, { Component, useContext } from 'react';
import { Redirect } from '@reach/router';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {!!currentUser ? (
        <RouteComponent {...rest} />
      ) : (
        <Redirect to={'/login'} noThrow />
      )}
    </>
  );
};

export default PrivateRoute;
