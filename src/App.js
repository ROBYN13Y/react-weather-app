import React from "react";
import "./styles/App.css";

import CitySearch from "./CitySearch";

function App() {
  return (
    <div className="container container-weather-app">
      <CitySearch />
      <footer>
        <a href="https://github.com/ROBYN13Y/react-weather-app">
          Open-Sourced Code
        </a>{" "}
        | Robyn Young
      </footer>
    </div>
  );
}

export default App;
