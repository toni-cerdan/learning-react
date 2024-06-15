function App() {
  return (
    <main className="bg-gray-800 min-h-screen flex items-center justify-center ">
      <button className="border-2 rounded-lg border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-gray-800 p-2 mb-4">
        Get custom fact
      </button>
      <div id="random-fact" className="hidden"></div>
      <img className="hidden" src="" alt="Random cat image" />
    </main>
  );
}

export default App;
