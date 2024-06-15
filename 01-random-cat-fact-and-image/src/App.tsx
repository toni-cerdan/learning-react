import { useState } from 'react';

function App() {
  const [fact, setFact] = useState('test');
  const url = 'https://catfact.ninja/fact';

  const getCustomFact = () => {
    fetch(url)
      .then(res => res.json())
      .then(({ fact }) => setFact(fact));
  };

  return (
    <main
      className="bg-gray-900 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#0c1016', color: '#7DD3F6' }}
    >
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
        <img className="hidden" src="" alt="Random cat image" />
      </div>
    </main>
  );
}

export default App;
