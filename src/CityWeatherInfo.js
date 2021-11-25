import React from "react";
import "./styles/CityWeatherInfo.css";

export default function CityWeatherInfo() {
  return (
    <div className="CurrentCity">
      <div className="row">
        <div className="col" id="col-text">
          <h2 id="input-city-h2">Current City</h2>
          <h5 id="current-day-time-h5">Day of the Week, Time (hrs:mins)</h5>
          <h6 id="month-day-year-h6">Month Day, Year</h6>
          <h6 id="temp-description-h6">Weather Description</h6>
          <h6 id="wind-speed-h6">Wind Speed (km/h)</h6>
        </div>
        <div className="col" id="col-emoji">
          <img
            src="https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif"
            alt="Loading Current City Weather Icon"
            width="110"
            id="today-weather-icon"
          />
          <h6 id="city-temp-text">
            #
            <a href="#" id="c">
              °C
            </a>
            <a href="#" id="f">
              °F
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
