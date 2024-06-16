import { useState } from 'react';
import { CAT_FACT_URL } from '../constants';

const useCatFact = () => {
  const [fact, setFact] = useState<string>('');
  const [error, setError] = useState<string>('');

  const getRandomFact = async () => {
    try {
      const res = await fetch(CAT_FACT_URL);
      if (!res.ok) setError('Error fetching cat fact');
      const { fact } = await res.json();
      setError('');
      setFact(fact);
    } catch (err) {
      setError('Sorry! An error occurred fetching the data.');
    }
  };

  return { fact, error, getRandomFact };
};

export default useCatFact;
