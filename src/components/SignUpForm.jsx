import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const SignUpForm = () => {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Form className='signup'>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group><br />

        <Button variant="light" type="submit" className="btn-block">
          Sign Up
        </Button>
      </Form>
    </Col>
  );
};

export default SignUpForm;
