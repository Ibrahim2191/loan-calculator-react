import { useState } from 'react';

const useEmiCalculator = () => {
  const [emi, setEmi] = useState(null);
  const [details, setDetails] = useState([]);

  const calculateEmi = (principal, annualRate, durationMonths) => {
    const R = annualRate / 12 / 100;
    const N = durationMonths; 


    const emiCalc = (principal * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const roundedEmi = parseFloat(emiCalc.toFixed(2));
    setEmi(roundedEmi); 


    const schedule = [];
    let balance = principal;

    for (let i = 1; i <= N; i++) {
      const interest = parseFloat((balance * R).toFixed(2));
      const principalComponent = parseFloat((roundedEmi - interest).toFixed(2)); 
      balance = parseFloat((balance - principalComponent).toFixed(2));

      schedule.push({
        month: i,
        EMI: roundedEmi,
        interest,
        principal: principalComponent,
        balance: balance > 0 ? balance : 0,
      });
    }

    setDetails(schedule);
  };

  return { emi, details, calculateEmi };
};

export default useEmiCalculator;
