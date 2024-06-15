import { useEffect, useState } from 'react';

const catFactUrl = 'https://catfact.ninja/fact';
const catImageUrl = 'https://cataas.com/cat/says';

function App() {
  const [fact, setFact] = useState<string>();
  const [catImageSrc, setCatImageSrc] = useState<string>();

  const getCustomFact = () => {
    fetch(catFactUrl)
      .then(res => res.json())
      .then(({ fact }) => setFact(fact));
  };

  useEffect(() => {
    if (!fact) return;

    const factFirstWord = fact.split(' ')[0];
    fetch(catImageUrl + '/' + factFirstWord).then(({ url }) =>
      setCatImageSrc(url)
    );
  }, [fact]);

  return (
    <main className="bg-dark-blue text-primary-blue min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <button
          onClick={getCustomFact}
          className="border-2 rounded-lg border-primary-blue bg-dark-blue hover:bg-primary-blue text-primary-blue hover:text-dark-blue p-2 mb-4"
        >
          Get custom fact
        </button>
        <div id="random-fact" className={!fact ? 'hidden' : ''}>
          {fact}
        </div>
        <img
          className={!fact ? 'hidden' : ''}
          src={catImageSrc}
          alt="Random cat image"
        />
      </div>
    </main>
  );
}

export default App;
