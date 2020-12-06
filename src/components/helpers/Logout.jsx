import React from 'react';
import { signOutUser } from '../../utils/signout';
import { navigate } from '@reach/router';

const Logout = () => {
  const signOutAndRedirect = () => {
    signOutUser();
    navigate('/');
  };
  return <>{signOutAndRedirect()}</>;
};

export default Logout;
