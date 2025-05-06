import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import Bootstrap components
import EmiCalculator from "../components/EmiCalculator";


const HomePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8}>
          <h4 className="mb-4">Welcome to the Loan Calculator</h4>
          <Card className="shadow-none border-0"> {/* Removed box shadow */}
            <Card.Body>
              <EmiCalculator />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          {/* Add any content for the second column if needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
