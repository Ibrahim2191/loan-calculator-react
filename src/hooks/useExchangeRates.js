import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '64c14d365c8992085de4915d';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/INR`;

const useExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setRates(res.data.conversion_rates || {});
      } catch (err) {
        setError('Failed to fetch exchange rates.');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { rates, loading, error };
};

export default useExchangeRates;
