import { useEffect, useState } from 'react';
import { CAT_FACT_URL, CAT_IMAGE_URL } from './constants';

function App() {
  const [fact, setFact] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();

  const getRandomFact = async () => {
    const res = await fetch(CAT_FACT_URL);
    const { fact } = await res.json();
    setFact(fact);
  };

  useEffect(() => {
    if (!fact) return;
    const factFirstWord = fact.split(' ')[0];
    fetch(`${CAT_IMAGE_URL}/says/${factFirstWord}?fontColor=white`).then(
      ({ url }) => {
        setImageUrl(url);
      }
    );
  }, [fact]);

  return (
    <>
      <header className="text-center p-16">
        <h1 className="text-5xl font-bold font-mono">Cat fact app</h1>
      </header>
      <main className="bg-dark-blue text-primary-blue min-h-screen flex justify-center font-mono">
        <div className="flex flex-col items-center">
          <button
            onClick={getRandomFact}
            className="border-2 rounded-lg border-primary-blue bg-dark-blue hover:bg-primary-blue text-primary-blue hover:text-dark-blue p-2 mb-4"
          >
            Get custom fact
          </button>
          <div id="random-fact" className={` p-5 ${!fact ? 'hidden' : ''}`}>
            {fact}
          </div>
          <img
            className={!imageUrl ? 'hidden' : ''}
            src={imageUrl}
            alt="Random cat image"
            loading="lazy"
          />
        </div>
      </main>
    </>
  );
}

export default App;
