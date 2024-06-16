import { useEffect, useState } from 'react';
import { getCatImage } from '../services/catImage';

const useCatImage = (fact: string) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!fact) return;
    const fetchImage = async () => {
      const factFirstWord = fact.split(' ')[0];
      const catImageUrl = await getCatImage(factFirstWord);
      if (!catImageUrl) {
        setError('Error fetching cat image');
        return;
      }
      setError('');
      setImageUrl(catImageUrl);
    };

    fetchImage();
  }, [fact]);

  return { imageUrl, error };
};

export default useCatImage;
