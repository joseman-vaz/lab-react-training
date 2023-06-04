import React, { useState } from 'react';
import profiles from '../data/berlin.json';

export function Facebook() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="facebook-container">
      <div className="country-buttons">
        {Array.from(new Set(profiles.map((profile) => profile.country))).map(
          (country) => (
            <button
              key={country}
              className={`country-button ${
                selectedCountry === country ? 'active' : ''
              }`}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </button>
          )
        )}
      </div>
      {profiles.map((profile) => (
        <div
          key={profile.firstName + profile.lastName}
          className={`facebook-individual-card ${
            selectedCountry === profile.country ? 'highlight' : ''
          }`}
        >
          <img
            className="facebook-image-container m-2"
            src={profile.img}
            alt={`${profile.firstName} ${profile.lastName}`}
            style={{ width: '200px', height: '200px' }}
          />
          <div className="facebook-text-container">
            <div>
              <strong>Name: </strong>
              {`${profile.firstName} ${profile.lastName}`}
            </div>
            <div>
              <strong>Country: </strong>
              {profile.country}
            </div>
            <div>
              <strong>Type: </strong>
              {profile.isStudent ? 'Student' : 'Teacher'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
