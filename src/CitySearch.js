import React, { useState } from "react";
import axios from "axios";

import "./styles/CitySearch.css";

export default function CitySearch() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});

  let form = (
    <div className="CitySearch">
      <form id="city-search-form" onSubmit={citySubmit}>
        <label for="city-search-input" className="form-label" id="main-label">
          <span className="title-emoji">🌈</span> WHAT IS THE WEATHER?
        </label>
        <br />
        <input
          type="text"
          className="city-search-box"
          placeholder="TYPE CITY HERE"
          size="34"
          id="city-search-input"
          onChange={searchCity}
        />
        <input type="submit" className="city-search-button" value="🔍" />
        <input type="button" id="current-location-button" value="📍" />
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
    setResult(true);
    setWeather({
      name: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (result) {
    return (
      <div>
        {form}
        <div className="CurrentCity">
          <div className="row">
            <div className="col" id="col-text">
              <h2 id="input-city-h2">{weather.name}</h2>
              <h5 id="current-day-time-h5">Day of the Week, Time (hrs:mins)</h5>
              <h6 id="month-day-year-h6">Month Day, Year</h6>
              <h6 id="temp-description-h6">{weather.description} </h6>
              <h6 id="wind-speed-h6">{weather.wind} (km/hr)</h6>
            </div>
            <div className="col" id="col-emoji">
              <img
                src={weather.icon}
                alt="Current City Weather Icon"
                width="110"
                id="today-weather-icon"
              />
              <h6 id="city-temp-text">
                {weather.temp}
                <button id="c">°C</button>
                <button id="f">°F</button>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
