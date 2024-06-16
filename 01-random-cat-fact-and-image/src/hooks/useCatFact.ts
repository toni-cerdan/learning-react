import { useState } from 'react';
import { getRandomFact } from '../services/facts';

const useCatFact = () => {
  const [fact, setFact] = useState<string>('');
  const [error, setError] = useState<string>('');

  const refreshFact = async () => {
    const fact = await getRandomFact();
    if (!fact) {
      setError('Error fetching cat fact');
      return;
    }
    setError('');
    setFact(fact);
  };

  return { fact, error, refreshFact };
};

export default useCatFact;
