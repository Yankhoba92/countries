import React, { useEffect, useState } from "react";
import { apiUrl } from "../util/api";
import SearchInput from "../Search/SearchInput";

const Allcountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const result = await fetch(`${apiUrl}/all`);

      if (!result.ok) throw new Error("Il y'a un probléme ! ");

      const data = await result.json();

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiUrl}/name/${countryName}`);
      if (!res.ok) throw new Error("Pas de pays trouver");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div>
      <div className="all__country__wrapper">
        <div className="country__top">
          <SearchInput onSearch={getCountryByName} />
        </div>
        <div className="country__bottom">
          {isLoading && !error && <h4>Loading.......</h4>}
          {error && !isLoading && <h4>{error}</h4>}

          {countries?.map((country) => (
            <div className="country__card" key={country.name.common}>
              <div className="country__img">
                <img src={country.flags.png} alt="" />
              </div>
              <div className="country__data">
                <h3>{country.name.common}</h3>
                <h6>Population: {country.population}</h6>
                <h6>Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allcountries;
