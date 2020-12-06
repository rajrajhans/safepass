import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RangeSlider from 'react-bootstrap-range-slider';
import { Form, InputGroup, Card } from 'react-bootstrap';
import generatePassword from '../../utils/randomPasswordGenerator';

const PasswordGenerator = ({ setPassword }) => {
  const [pwdlength, setPwdlength] = useState(8);
  const [isNum, setIsNum] = useState(true);
  const [isAlphabets, setIsAlphabets] = useState(true);
  const [isSpecialChar, setIsSpecialChar] = useState(false);

  useEffect(() => {
    setPassword(generatePassword(pwdlength, isNum, isSpecialChar));
  }, [pwdlength, isNum, isSpecialChar, setPassword]);

  return (
    <Card>
      <Card.Body className={'passwordGenCard'}>
        <Row>
          <Col>
            <Form.Label>Password Length</Form.Label>
            <InputGroup>
              <Form.Control
                onChange={e => setPwdlength(e.target.value)}
                value={pwdlength}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">characters</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <RangeSlider
              value={pwdlength}
              onChange={e => setPwdlength(e.target.value)}
              variant={'primary'}
              min={5}
              max={40}
            />
          </Col>
          <Col>
            <Form.Label>Password Options</Form.Label>
            <Form.Check
              type={'checkbox'}
              label={'Numbers'}
              checked={isNum}
              onChange={e => setIsNum(e.target.checked)}
              className={'passwordGenCheckbox'}
            />
            <Form.Check
              type={'checkbox'}
              label={'Alphabets'}
              checked={isAlphabets}
              onChange={e => setIsAlphabets(e.target.checked)}
              className={'passwordGenCheckbox'}
            />
            <Form.Check
              type={'checkbox'}
              label={'Special Characters'}
              checked={isSpecialChar}
              onChange={e => setIsSpecialChar(e.target.checked)}
              className={'passwordGenCheckbox'}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PasswordGenerator;
