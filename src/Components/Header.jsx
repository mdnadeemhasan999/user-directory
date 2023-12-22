import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';

const Header = () => {
  const { countries } = useData();
  const [selectedCountry, setSelectedCountry] = useState();
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
        const utcOffset = data.utc_offset;
        const offsetInMillis = parseInt(utcOffset.split(':')[0], 10) * 60 * 60 * 1000 +
          parseInt(utcOffset.split(':')[1], 10) * 60 * 1000;
        const date = new Date()
        const utcTimeInMillis = date.getTime();
        const adjustedTimeInMillis = utcTimeInMillis + offsetInMillis + date.getTimezoneOffset()*60*1000;
        setCurrentTime(new Date(adjustedTimeInMillis));
      } catch (error) {
        console.error('Error fetching time data:', error);
      }
    } else {
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
        setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000));
        }
    }, 1000);

    return () => clearInterval(intervalId);
    }, [isPaused]);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: "2-digit", hour12: false });
    };

  return (
    <div className='header'>
        <div className='row'>
            <div className='back'>
                <button className='btn' onClick={handleBackClick}>
                Back
                </button>
            </div>
            <select id="country" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map((country) => (
                <option key={country} value={country}>
                {country}
                </option>
            ))}
            </select>
        </div>
      
      <div className='pause'>
        <p className='time'>{formatTime(currentTime)}</p>
        <button className='pause-btn' onClick={handlePauseClick}>
          {isPaused ? 'Start' : 'Pause'}
        </button>
      </div>
    </div>
  );
};

export default Header;