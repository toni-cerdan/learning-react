import { useEffect, useState } from 'react';
import { CAT_IMAGE_URL } from '../utils/constants';

const useCatImage = (fact: string) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!fact) return;
    const factFirstWord = fact.split(' ')[0];

    const fetchImage = async () => {
      try {
        const res = await fetch(
          `${CAT_IMAGE_URL}/says/${factFirstWord}?fontColor=white`
        );
        if (!res.ok) setError('Error fetching cat image');
        setError('');
        setImageUrl(res.url);
      } catch (err) {
        setError('Sorry! An error occurred fetching the cat image data.');
      }
    };

    fetchImage();
  }, [fact]);

  return { imageUrl, error };
};

export default useCatImage;
