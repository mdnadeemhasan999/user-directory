import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';

const Header = () => {
  const { countries } = useData();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const fetchData = async () => {
    if (selectedCountry) {
        try {
        const response = await fetch(`http://worldtimeapi.org/api/timezone/${selectedCountry}`);
        const data = await response.json();
        
        // Extracting utc_offset from the API response
        const utcOffset = data.utc_offset;
        
        // Converting utc_offset to milliseconds
        const offsetInMillis = parseInt(utcOffset.split(':')[0], 10) * 60 * 60 * 1000 +
                                parseInt(utcOffset.split(':')[1], 10) * 60 * 1000;
        
        // Adjusting the time
        const utcTimeInMillis = new Date(data.utc_datetime).getTime();
        console.log(new Date(utcTimeInMillis))
        const adjustedTimeInMillis = utcTimeInMillis + offsetInMillis;

        // Setting the adjusted time
        setCurrentTime(new Date(adjustedTimeInMillis));
        } catch (error) {
        console.error('Error fetching time data:', error);
        }
    } else {
        console.log("te")
        setCurrentTime(new Date());
    }
    };

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCountry, isPaused]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        fetchData();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Assuming you have a function to format the date as a string
  const formatTime = (time) => {
    return time.toLocaleTimeString();
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
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select...</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <p>Current Time: {formatTime(currentTime)}</p>
        <button className='pause-btn' onClick={handlePauseClick}>
          {isPaused ? 'Start' : 'Pause'}
        </button>
      </div>
    </div>
  );
};

export default Header;