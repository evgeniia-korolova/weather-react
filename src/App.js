import Weather from './Weather';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <div>
      Open soursed code by {' '}
        <a
          href="https://github.com/evgeniia-korolova/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Evgeniia Korolova
        </a>
      </div>
    </>
  );
}

export default App;
