export const fetchExchangeRates = async (baseCurrency = 'USD') => {
    const apiKey = '64c14d365c8992085de4915d'; 
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.result === 'success') {
      return data.conversion_rates;
    } else {
      throw new Error('Unable to fetch exchange rates');
    }
  };
  