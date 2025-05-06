import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const NotFoundPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGoHome = () => {
    navigate('/'); // This will navigate to the home page
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="text-center">
        <Col>
          <h2>404 - Page Not Found</h2>
          <Button
            variant="outline-primary"
            className="bg-transparent border-primary text-primary fw-semibold hover-effect mt-3"
            onClick={handleGoHome}
          >
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
