import React, { useState } from "react";
import useExchangeRates from "../hooks/useExchangeRates";
import { Table, Pagination, Container, Row, Col, Card, Spinner } from "react-bootstrap";

const ExchangeRateTable = () => {
  const { rates, loading, error } = useExchangeRates();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // You can adjust this to control how many rows to show per page

  const currencies = Object.entries(rates); // Convert object to array of [currency, rate]

  const totalPages = Math.ceil(currencies.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (loading)
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner animation="border" variant="primary" />
          </Col>
        </Row>
      </Container>
    );

  if (error)
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs="auto">
            <p>{error}</p>
          </Col>
        </Row>
      </Container>
    );

  const paginatedCurrencies = currencies.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-3">Exchange Rates</h4>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Currency</th>
                    <th>Rate (vs INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCurrencies.map(([currency, rate]) => (
                    <tr key={currency}>
                      <td>{currency}</td>
                      <td>{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Pagination */}
              <Pagination>
                {/* First Page Button */}
                <Pagination.First onClick={() => handlePageChange(1)} disabled={page === 1} />
                {/* Previous Page Button */}
                <Pagination.Prev
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                />
                {/* Current Page */}
                <Pagination.Item active>{page}</Pagination.Item>
                {/* Next Page Button */}
                <Pagination.Next
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                />
                {/* Last Page Button */}
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={page === totalPages} />
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExchangeRateTable;
