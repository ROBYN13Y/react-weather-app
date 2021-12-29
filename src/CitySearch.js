import React, { useState } from "react";
import axios from "axios";

import "./styles/CitySearch.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function CitySearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  let form = (
    <div className="CitySearch">
      <form id="city-search-form" onSubmit={citySubmit}>
        <label for="city-search-input" className="form-label" id="main-label">
          <span className="title-emoji">🌈</span>
          WHAT IS THE WEATHER?
        </label>
        <br />
        <input
          type="search"
          className="city-search-box"
          placeholder="TYPE CITY HERE"
          title="Type a city for me to search!"
          size="34"
          id="city-search-input"
          onChange={searchCity}
        />
        <input
          type="submit"
          className="city-search-button"
          value="🔍"
          title="Search"
        />
        {/* <input
          type="submit"
          id="current-location-button"
          value="📍"
          title="Your Location"
        /> */}
      </form>
    </div>
  );

  function citySubmit(event) {
    event.preventDefault();
    let apiKey = "abaa5f9b2fdbce9c30bf8c70c78486ba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        {form}
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    return form;
  }
}
