import React, { useContext, useState } from 'react';
import { AuthContext } from './helpers/AuthContext';
import AddNewPassword from './helpers/AddNewPassword';
import Button from 'react-bootstrap/Button';
import '../styles/MyPasswords.css';

const MyPasswords = () => {
  const [isAddPwdActive, setIsAddPwdActive] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleClose = () => {
    setIsAddPwdActive(false);
  };

  return (
    <>
      <AddNewPassword isActive={isAddPwdActive} handleClose={handleClose} />
      <div>
        <div className="welcomeText">Hello, {currentUser.email}</div>
        <Button onClick={() => setIsAddPwdActive(true)}>
          Add New Password
        </Button>
      </div>
    </>
  );
};

export default MyPasswords;
