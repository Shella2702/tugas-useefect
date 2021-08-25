import React from "react";

const Country = ({ country, darkMode }) => {
  return (
    <div className="country">
      <div className="country-image">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className={`country-info ${darkMode ? `charcoal` : `light`}`}>
        <h2>{country.name}</h2>
        <ul>
          <li>
            <span>Populasi :</span> {country.population}
          </li>
          <li>
            <span>Wilayah :</span> {country.region}
          </li>
          <li>
            <span>Ibu Kota : </span> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;