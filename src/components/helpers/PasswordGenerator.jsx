import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PasswordGenerator = ({ isActive, setPassword }) => {
  if (!isActive) return null;

  return (
    <Row>
      <Col>Hi</Col>
      <Col>Ok</Col>
    </Row>
  );
};

export default PasswordGenerator;
