import React, { useState } from 'react';
import useExchangeRates from '../hooks/useExchangeRates';
import { Form } from 'react-bootstrap'; // Import Bootstrap components

const CurrencyConverter = ({ amountInINR }) => {
  const { rates, loading, error } = useExchangeRates();
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const convertedAmount = rates[selectedCurrency]
    ? (amountInINR * rates[selectedCurrency]).toFixed(2)
    : null;

  return (
    <div className="container mt-4">
      <h3>Convert EMI to Other Currency</h3>

      {loading && <p>Loading exchange rates...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <Form.Group controlId="currencySelect" className="mb-3">
            <Form.Label>Select Currency</Form.Label>
            <Form.Control
              as="select"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <div style={{ marginTop: '20px' }}>
            <p>
              ₹{amountInINR} = {convertedAmount} {selectedCurrency}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;
