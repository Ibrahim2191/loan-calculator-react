import React, { useState } from 'react';
import {
  Button, Table, Row, Col, Form, Container
} from 'react-bootstrap';
import { Typography } from '@mui/material';
import useEmiCalculator from '../hooks/useEmiCalculator';
import CurrencyConverter from './CurrencyConverter';

const EmiCalculator = () => {
  const { emi, details, calculateEmi } = useEmiCalculator();
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [reset, setReset] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEmi(Number(principal), Number(rate), Number(months));
  };

  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setMonths('');
    setReset(true);

    calculateEmi(0, 0, 0);
  };

  return (
    <Container className="my-4">
      <Typography variant="h5" className="mb-4" align="center">EMI Calculator</Typography>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} sm={4}>
            <Form.Group controlId="principal">
              <Form.Label>Principal Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Enter Principal"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="rate">
              <Form.Label>Annual Interest Rate (%)</Form.Label>
              <Form.Control
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter Interest Rate"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={4}>
            <Form.Group controlId="months">
              <Form.Label>Loan Duration (Months)</Form.Label>
              <Form.Control
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                placeholder="Enter Loan Duration"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit" className="mx-2">
            Calculate
          </Button>
          <Button variant="secondary" onClick={handleReset} className="mx-2">
            Reset
          </Button>
        </div>
      </Form>

      {emi && !reset && (
        <>
          <Typography variant="h6" className="mt-3" align="center">Monthly EMI: ₹{emi}</Typography>
          <CurrencyConverter amountInINR={emi} />

          <Typography variant="h6" className="mt-4" align="center">Amortization Schedule</Typography>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Month</th>
                <th>EMI</th>
                <th>Interest</th>
                <th>Principal</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {details.map((item) => (
                <tr key={item.month}>
                  <td>{item.month}</td>
                  <td>₹{item.EMI}</td>
                  <td>₹{item.interest}</td>
                  <td>₹{item.principal}</td>
                  <td>₹{item.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default EmiCalculator;
