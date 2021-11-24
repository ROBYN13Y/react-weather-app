import React from "react";

import "./styles/CitySearch.css";

export default function CitySearch() {
  return (
    <div className="CitySearch">
      <form id="city-search-form">
        <label for="city-search-input" className="form-label" id="main-label">
          <span className="title-emoji">🌈</span> What is the weather?
        </label>
        <br />
        <input
          type="text"
          className="city-search-box"
          placeholder="TYPE CITY HERE!"
          size="34"
          id="city-search-input"
        />
        <input type="submit" className="city-search-button" value="SEARCH" />
        <input
          type="button"
          id="current-location-button"
          value="YOUR LOCATION"
        />
      </form>
    </div>
  );
}
