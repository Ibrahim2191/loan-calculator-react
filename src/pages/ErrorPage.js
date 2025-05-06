import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center bg-light text-center"
    >
      <Row>
        <Col>
          <h2 className="text-danger mb-3">Something went wrong</h2>
          <p className="text-muted mb-4">Please try again later.</p>
          <Button
            variant="outline-primary"
            className="bg-transparent border-primary text-primary fw-semibold hover-effect"
            onClick={handleGoHome}
          >
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
