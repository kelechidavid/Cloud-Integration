import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import '/css/LandingPage'; // Custom CSS file for purple color styling

const LandingPage = () => {
  return (
    <div className="purple-bg">
      <Container>
        <Row className="mt-5">
          <Col>
            <h1 className="text-center text-white">Welcome to GomyCode</h1>
            <p className="text-center text-white">Your gateway to success</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
