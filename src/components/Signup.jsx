import React, { useCallback, useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import app from '../utils/firebaseInit';
import { navigate } from '@reach/router';
import { LoadingContext } from './helpers/LoadingContext';
import { AuthContext } from './helpers/AuthContext';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Signup = () => {
  const [signupState, setSignupState] = useState({
    displayname: '',
    email: '',
    password: '',
  });
  const { setIsLoading } = useContext(LoadingContext);

  const handleSubmit = useCallback(
    async e => {
      setIsLoading(true);
      e.preventDefault();
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(
            signupState.email,
            signupState.password
          )
          .then(res => {
            return res.user.updateProfile({
              displayName: signupState.displayname,
            });
          })
          .then(() => {
            navigate('/');
            setIsLoading(false);
          });
      } catch (e) {
        setIsLoading(false);
        alert(e.message);
        console.log(e);
      }
    },
    [
      setIsLoading,
      signupState.displayname,
      signupState.email,
      signupState.password,
    ]
  );

  const handlesignupChange = e => {
    const nameOfField = e.target.name;
    const value = e.target.value;

    setSignupState({ ...signupState, [nameOfField]: value });
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    navigate('/');
  }

  return (
    <Container>
      <Card style={{ marginTop: '30px' }}>
        <Card.Header>
          <Card.Title style={{ marginBottom: '0' }}>Register</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                name="displayname"
                placeholder="Enter your name"
                onChange={handlesignupChange}
              />
              <Form.Text className="text-muted">
                What shall we call you?
              </Form.Text>
            </Form.Group>

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
              <Form.Text className="text-muted">
                This will be your master password. Choose wisely!
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me Signed In" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
