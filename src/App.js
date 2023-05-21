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
        This project was coded by Evgeniia Korolova{' '}
        <a
          href="https://github.com/evgeniia-korolova/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          and is open-sourced on GitHub
        </a>
      </div>
    </>
  );
}

export default App;
