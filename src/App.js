import React from "react";
import "./styles/App.css";

import CitySearch from "./CitySearch";

function App() {
  return (
    <div className="container">
      <header>SheCodes Project 1</header>
      <div className="container" id="app">
        <CitySearch />
      </div>
      <footer>
        <a href="https://github.com/ROBYN13Y/react-weather-app">
          🔗 Open-Sourced Code
        </a>{" "}
        | <a href="https://www.instagram.com/robyn13y/">Robyn Young 👩‍💻 </a>
      </footer>
    </div>
  );
}

export default App;
