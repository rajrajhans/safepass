import React, { useContext } from 'react';
import { AuthContext } from './helpers/AuthContext';
import AddNewPassword from './helpers/AddNewPassword';

const MyPasswords = () => {
  const { currentUser } = useContext(AuthContext);

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <>
      <div>
        Hello, {currentUser.email}
        <br />
        <AddNewPassword isActive={true} handleClose={handleClose} />
      </div>
    </>
  );
};

export default MyPasswords;
