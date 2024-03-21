import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Allcountries from "./components/allCountries/Allcountries";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Le Monde ou rien</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Allcountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
