import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddNewPassword = ({ isActive, handleClose }) => {
  const handleSubmit = () => {
    console.log('Submitted');
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
                <Form.Control as={'select'} custom placeholder={'General'}>
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
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Username / Email</Form.Label>
            <Form.Control required name={'username'} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control required name={'password'} type={'password'} />
          </Form.Group>
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
