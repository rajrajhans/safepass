import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './helpers/AuthContext';
import AddNewPassword from './helpers/AddNewPassword';
import Button from 'react-bootstrap/Button';
import '../styles/MyPasswords.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { getPasswords } from '../utils/firebaseDBapi';
import Spinner from 'react-bootstrap/Spinner';
import { Form } from 'react-bootstrap';
import PasswordField from './helpers/PasswordField';

const MyPasswords = () => {
  const [isAddPwdActive, setIsAddPwdActive] = useState(false);
  const [isPwdsLoading, setIsPwdsLoading] = useState(true);
  const [passwords, setPasswords] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const handleClose = () => {
    setIsAddPwdActive(false);
  };

  const getAndSetPasswordstoState = () => {
    setIsPwdsLoading(true);
    getPasswords(currentUser.uid)
      .then(recvdPasswords => {
        setPasswords(recvdPasswords);
        console.log(recvdPasswords);
        setIsPwdsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsPwdsLoading(false);
      });
  };

  useEffect(() => {
    getAndSetPasswordstoState();
  }, []);

  const parseDate = timestamp => {
    let d = new Date(timestamp);

    return d.toDateString();
  };

  return (
    <Container>
      <AddNewPassword
        isActive={isAddPwdActive}
        handleClose={handleClose}
        refreshDashboard={getAndSetPasswordstoState}
      />
      <div>
        <div className="welcomeText">Welcome, {currentUser.displayName}.</div>

        <hr align={'left'} className={'bigLine'} />

        <Card style={styles.card}>
          <Card.Header>
            <Row>
              <Col>
                <h4 style={styles.cardHeaderTitle}>Your Passwords</h4>
              </Col>
              <Col style={styles.rightcol}>
                <Button onClick={() => setIsAddPwdActive(true)}>
                  Add New Password
                </Button>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body>
            <Table bordered hover>
              <thead>
                <th>Title</th>
                <th>Category</th>
                <th>Username / Email</th>
                <th>Password</th>
                <th>Last Updated</th>
              </thead>
              {isPwdsLoading ? null : (
                <tbody>
                  {Object.keys(passwords).map((keyName, i) => (
                    <tr key={keyName}>
                      <td>{passwords[keyName].title}</td>
                      <td>{passwords[keyName].category}</td>
                      <td>{passwords[keyName].username}</td>
                      <td>
                        <PasswordField pwd={passwords[keyName].password} />
                      </td>
                      <td>{parseDate(passwords[keyName].updatedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
            {isPwdsLoading ? <LoadingPasswords /> : null}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

const styles = {
  card: { marginTop: '25px' },
  rightcol: { textAlign: 'right' },
  cardHeaderTitle: { margin: 0, lineHeight: 1.5 },
  loading: { textAlign: 'center', margin: '50px' },
};

const LoadingPasswords = () => (
  <Container style={styles.loading}>
    <Spinner animation="border" role="status" />
  </Container>
);

export default MyPasswords;
