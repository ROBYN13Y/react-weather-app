import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="CurrentCity">
      <div className="row">
        <div className="col" id="col-text">
          <h2 id="input-city-h2">{props.data.city}</h2>
          <FormattedDate date={props.data.date} />
          <h6 id="temp-description-h6">{props.data.description} </h6>
          <h6 id="wind-speed-h6">Wind Speed: {props.data.wind} (km/hr)</h6>
        </div>
        <div className="col" id="col-emoji">
          <WeatherIcon code={props.data.icon} size={80} />
          <h6 id="city-temp-text">
            {props.data.temperature}
            <span className="temp-unit">°C</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
