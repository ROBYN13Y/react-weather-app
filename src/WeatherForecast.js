import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherForecast.css";

import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function ForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast row">
        {forecast.map(function (day, index) {
          if (index < 7) {
            return (
              <div className="col" key={index}>
                <WeatherForecastPreview data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "abaa5f9b2fdbce9c30bf8c70c78486ba";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(ForecastResponse);

    return null;
  }
}
