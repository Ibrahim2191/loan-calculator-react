import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', fontSize: '18px' }}>
      <p>
        Live Deployment:{' '}
        <a
          href="https://loan-calculator-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}
        >
          https://loan-calculator-react.vercel.app/
        </a>
      </p>
    </div>
  );
};

export default About;
