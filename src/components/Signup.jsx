import React, { useCallback, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signUpUser } from '../utils/auth';
import app from '../utils/firebaseInit';
import { navigate } from '@reach/router';

const Signup = () => {
  const [signupState, setSignupState] = useState({ email: '', password: '' });

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(
            signupState.email,
            signupState.password
          );
        navigate('/');
      } catch (e) {
        alert(e.message);
        console.log(e);
      }
    },
    [signupState.email, signupState.password]
  );

  const handlesignupChange = e => {
    const nameOfField = e.target.name;
    const value = e.target.value;

    setSignupState({ ...signupState, [nameOfField]: value });
  };

  return (
    <div>
      Signup
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
            onChange={handlesignupChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handlesignupChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me Signed In" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
