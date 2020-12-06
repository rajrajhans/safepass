import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signInUser } from '../utils/auth';

const Login = () => {
  const [loginState, setLoginState] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    signInUser(loginState.email, loginState.password);
  };

  const handleLoginChange = e => {
    const nameOfField = e.target.name;
    const value = e.target.value;

    setLoginState({ ...loginState, [nameOfField]: value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
            onChange={handleLoginChange}
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
            onChange={handleLoginChange}
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

export default Login;
