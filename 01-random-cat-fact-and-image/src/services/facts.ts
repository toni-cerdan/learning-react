import { CAT_FACT_URL } from '../utils/constants';

export const getRandomFact = async () => {
  const res = await fetch(CAT_FACT_URL);
  if (!res.ok) return;
  const { fact }: { fact: string } = await res.json();
  return fact;
};
