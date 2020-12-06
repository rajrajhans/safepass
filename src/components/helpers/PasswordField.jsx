import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const PasswordField = ({ pwd }) => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const toggleIsPwdVisible = e => {
    setIsPwdVisible(!isPwdVisible);
  };

  return (
    <InputGroup>
      <Form.Control
        type={isPwdVisible ? 'text' : 'password'}
        readOnly
        value={pwd}
      />
      <InputGroup.Append>
        <Button variant={'outline-light'} onClick={toggleIsPwdVisible}>
          👀
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default PasswordField;
