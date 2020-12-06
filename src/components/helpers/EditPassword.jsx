import React, { useContext, useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PasswordGenerator from './PasswordGenerator';
import { InputGroup } from 'react-bootstrap';
import { updatePassword, deletePassword } from '../../utils/firebaseDBapi';
import { AuthContext } from './AuthContext';
import { LoadingContext } from './LoadingContext';
import Collapse from 'react-bootstrap/Collapse';

const EditPassword = ({
  isActive,
  handleClose,
  refreshDashboard,
  pwdTuple,
}) => {
  const [formState, setFormState] = useState({
    category: pwdTuple[1].category,
    title: pwdTuple[1].title,
    username: pwdTuple[1].username,
  });

  const [password, setPassword] = useState(pwdTuple[1].password);

  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const [isPwdGenActive, setIsPwdGenActive] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { setIsLoading } = useContext(LoadingContext);

  const handleSubmit = async e => {
    e.preventDefault();
    handleClose();
    setIsLoading(true);
    const passwordInfo = {
      category: formState.category,
      title: formState.title,
      username: formState.username,
      password: password,
      id: pwdTuple[0],
    };
    await updatePassword(currentUser.uid, passwordInfo);
    refreshDashboard();
    setIsLoading(false);
  };

  const handleDelete = async e => {
    e.preventDefault();
    handleClose();
    setIsLoading(true);
    await deletePassword(currentUser.uid, pwdTuple[0]);
    refreshDashboard();
    setIsLoading(false);
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
    setIsPwdVisible(true);
  };

  useEffect(() => {
    console.log(pwdTuple);
    setFormState({
      category: pwdTuple[1].category,
      title: pwdTuple[1].title,
      username: pwdTuple[1].username,
    });
    setPassword(pwdTuple[1].password);
  }, [pwdTuple]);

  return (
    <Modal show={isActive} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Password for {formState.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as={'select'}
                  custom
                  value={formState.category}
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
                  value={formState.title}
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
              value={formState.username}
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
                : 'Close Password Generator'}
              <br />
            </a>
          </div>
          <Collapse in={isPwdGenActive}>
            <div className="test">
              <PasswordGenerator setPassword={setPassword} />
            </div>
          </Collapse>
        </Modal.Body>

        <Modal.Footer>
          <Button variant={'secondary'} onClick={handleClose}>
            Close
          </Button>

          <Button variant={'danger'} onClick={handleDelete}>
            Delete
          </Button>

          <Button variant={'primary'} type={'Submit'}>
            Update
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditPassword;
