import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

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
    </div>
  );
}