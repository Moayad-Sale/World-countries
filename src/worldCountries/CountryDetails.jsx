import React from 'react'
import { Link, useParams } from 'react-router-dom'
import countriesData from './data.json'
import Navbar from '../layouts/Navbar'

const CountryDetails = () => {
    const { countryName } = useParams()

    // Find the country object based on the country name in the URL
    const country = countriesData.find((c) => c.name === countryName)

    if (!country) {
        return <div>Country not found</div>
    }

    return (
        <div>
          <Navbar />
            <div className="country-details-container">
                <div className="back-button-container">
                    <Link to="/" className="back-button">
                        Back
                    </Link>
                </div>
                <div className="country-details-inner">
                    <div className="country-details-left">
                        <img src={country.flags.svg} alt={country.name} />
                    </div>
                    <div className="country-details-right">
                        <h2>{country.name}</h2>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails
