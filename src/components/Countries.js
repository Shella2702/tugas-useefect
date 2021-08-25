import React from "react";
import Country from "./Country";
import loading from "../assets/loading.gif"

const Countries = ({ countries, isLoading, darkMode }) => {
  return isLoading ? (
    <div className="countries loading">
      <img src={loading} alt="loading" />
    </div>
  ) : (
    <section className="countries container">
      {countries.map((country, index) => (
        <Country key={index} country={country} darkMode={darkMode} />
      ))}
    </section>
  );
};

export default Countries;