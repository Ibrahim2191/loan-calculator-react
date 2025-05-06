import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import ExchangeRateTable from "./components/ExchangeRateTable";

function App() {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchange-rate" element={<ExchangeRateTable />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
