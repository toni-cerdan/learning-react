import useCatFact from './hooks/useCatFact';
import useCatImage from './hooks/useCatImage';

function App() {
  const { fact, error: factError, getRandomFact } = useCatFact();
  const { imageUrl, error: imageError } = useCatImage(fact);

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
          {factError ? (
            <div className="p-5">{factError}</div>
          ) : (
            <>
              {imageError ? (
                <div>{imageError}</div>
              ) : (
                <>
                  <div className="p-5">{fact}</div>
                  <img
                    className={!imageUrl ? 'hidden' : ''}
                    src={imageUrl}
                    alt="Random cat image"
                    loading="lazy"
                  />
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
