import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiUrl } from "../util/api";

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const response = await fetch(`${apiUrl}/name/${countryName}`);
      if (!response.ok) throw new Error("Probléme");
      const data = await response.json();
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getCountryByName();
  }, [countryName]);
  return (
    <div className="country__info__wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>
      {isLoading && !error && <h4>Loading.......</h4>}
      {error && !isLoading && <h4>{error}</h4>}
      {country?.map((country) => (
        <div className="country__info__container" key={country.name.common}>
          <div className="country__info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country__info">
            <h3>{country.name.common}</h3>
            <div className="country__info-left">
              <h5>
                Population: <span>{country.population}</span>
              </h5>
              <h5>
                Continent: <span>{country.region}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInfo;
