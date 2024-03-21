import React from "react";

const FilterCountry = ({ onSelect }) => {
  const handleSelect = (e) => {
    onSelect(e.target.value);
  };
  return (
    <select onChange={handleSelect}>
      <option className="option">Filtrer par Continent</option>
      <option className="option" value="Africa">
        Afrique
      </option>
      <option className="option" value="America">
        Amerique
      </option>
      <option className="option" value="Asia">
        Asie
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceanie
      </option>
    </select>
  );
};

export default FilterCountry;
