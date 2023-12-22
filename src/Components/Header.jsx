import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';

const Header = () => {
  const { countries } = useData();
  const [selectedCountry, setSelectedCountry] = useState('test');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='header'>
      <div className='back'>
        <button className='btn' onClick={handleBackClick}>
          Back
        </button>
      </div>
      <div className='pause'>
        <label htmlFor="country">Country</label>
        <select id="country"  value={selectedCountry} onChange={handleCountryChange}>
            {countries.map((country) => (
                <option key={country} value={country}>
                {country}
                </option>
            ))}
        </select>
        <p>clock</p>
        <button className='pause-btn'>Pause/Start</button>
      </div>
    </div>
  );
};

export default Header;