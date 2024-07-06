import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton';
import { getWeather, getForecast } from './services/weatherService';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleCitySelect = async (city) => {
    const weatherData = await getWeather(city.name);
    setWeather(weatherData.data);

    const forecastData = await getForecast(city.name);
    setForecast(forecastData.data);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Weather Dashboard
      </Typography>
      {isLoggedIn ? (
        <>
          <LogoutButton onLogout={handleLogout} />
          <SearchBar onCitySelect={handleCitySelect} />
          {weather && <CurrentWeather weather={weather} />}
          {forecast && <Forecast forecast={forecast} />}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Container>
  );
};

export default App;
