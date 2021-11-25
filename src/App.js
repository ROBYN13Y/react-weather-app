import React from "react";
import "./styles/App.css";

import CitySearch from "./CitySearch";
import CityWeatherInfo from "./CityWeatherInfo";

function App() {
  return (
    <div className="container container-weather-app">
      <CitySearch />
      <CityWeatherInfo />
    </div>
  );
}

export default App;
