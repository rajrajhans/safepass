import React, { useCallback, useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import app from '../utils/firebaseInit';
import { navigate } from '@reach/router';
import { AuthContext } from './helpers/AuthContext';
import { LoadingContext } from './helpers/LoadingContext';

const Login = () => {
  const [loginState, setLoginState] = useState({ email: '', password: '' });
  const { setIsLoading } = useContext(LoadingContext);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      setIsLoading(true);
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(loginState.email, loginState.password);
        setIsLoading(false);
        navigate('/');
      } catch (e) {
        setIsLoading(false);
        alert(e.message);
        console.log(e);
      }
    },
    [loginState.email, loginState.password]
  );

  const handleLoginChange = e => {
    const nameOfField = e.target.name;
    const value = e.target.value;

    setLoginState({ ...loginState, [nameOfField]: value });
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    navigate('/');
  }

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
