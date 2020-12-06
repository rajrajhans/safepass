import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PasswordGenerator from './PasswordGenerator';
import { InputGroup } from 'react-bootstrap';

const AddNewPassword = ({ isActive, handleClose }) => {
  const [formState, setFormState] = useState({
    category: 'General',
    title: '',
    username: '',
  });

  const [password, setPassword] = useState('');

  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const [isPwdGenActive, setIsPwdGenActive] = useState(false);

  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleFormChange = e => {
    const nameOfField = e.target.name;
    const value = e.target.value;

    setFormState({ ...formState, [nameOfField]: value });
  };

  const handlePwdChange = e => {
    setPassword(e.target.value);
  };

  const toggleIsPwdVisible = e => {
    setIsPwdVisible(!isPwdVisible);
  };

  const handlePwdGenToggle = e => {
    e.preventDefault();
    setIsPwdGenActive(!isPwdGenActive);
  };

  return (
    <Modal show={isActive} onHide={handleClose}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as={'select'}
                  custom
                  placeholder={'General'}
                  onChange={handleFormChange}
                  name={'category'}
                >
                  <option value={'General'}>General</option>
                  <option value={'Social'}>Social</option>
                  <option value={'Email'}>Email</option>
                  <option value={'Entertainment'}>Entertainment</option>
                  <option value={'Education'}>Education</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  name={'title'}
                  placeholder={'Facebook'}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Username / Email</Form.Label>
            <Form.Control
              onChange={handleFormChange}
              required
              name={'username'}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                onChange={handlePwdChange}
                required
                name={'password'}
                value={password}
                type={isPwdVisible ? 'text' : 'password'}
              />
              <InputGroup.Append>
                <Button
                  variant={'outline-secondary'}
                  onClick={toggleIsPwdVisible}
                >
                  👀
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>

          <div style={{ marginBottom: '5px' }}>
            <a href={'#'} onClick={handlePwdGenToggle}>
              {!isPwdGenActive
                ? 'Generate a Secure Password'
                : 'Close Generator'}
              <br />
            </a>
          </div>
          {isPwdGenActive ? (
            <PasswordGenerator setPassword={setPassword} />
          ) : null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant={'secondary'} onClick={handleClose}>
            Close
          </Button>

          <Button variant={'primary'} onClick={handleSubmit} type={'Submit'}>
            Add Password
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddNewPassword;
