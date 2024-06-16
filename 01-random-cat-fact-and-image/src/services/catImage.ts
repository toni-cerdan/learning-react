import { CAT_IMAGE_URL } from '../utils/constants';

export const getCatImage = async (factFirstWord: string) => {
  const res = await fetch(
    `${CAT_IMAGE_URL}/says/${factFirstWord}?fontColor=white`
  );
  if (!res.ok) return;
  return res.url;
};
