import data from './data.json';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filteredCountries = data.filter((country) => {
    if (selectedRegion === 'All') {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    }
  });

  return (
    <div className="countries-container">
      <Navbar/>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search countries"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="filter-container">
          <label className='region-text' htmlFor="region-select">Filter by Region:</label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <Link style={{ textDecoration: 'none'}} to={`/country/${country.name}`} key={country.name} className="country">
            <img src={country.flags.png} alt={country.name} />
            <div className="country-content">
              <h3 className='country-name'>{country.name} </h3>
              <p className='country-capital'>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="no-countries-found">No countries found.</p>
      )}
    </div>
  );
};

export default Countries;