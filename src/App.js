import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/kromer52"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ilona
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kromer52/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-rho-wine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Vercel
          </a>
      
        </footer>
    </div>
  );
}

export default App;


