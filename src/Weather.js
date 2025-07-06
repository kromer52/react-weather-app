import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  // Fetch weather on mount and whenever `city` changes
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  function fetchWeather() {
    const apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData({
          ready: true,
          coordinates: response.data.coord,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
        });
      })
      .catch((error) => {
        console.error("Weather API error:", error);
        // Optionally: set an error state here to show in the UI
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchWeather();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (!weatherData.ready) {
    return <div className="Weather">Loading…</div>;
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city…"
              className="form-control"
              autoFocus
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
}
