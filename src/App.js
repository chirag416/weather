import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getWeather, getForecast } from './services/weatherService';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleCitySelect = async (city) => {
    const weatherData = await getWeather(city.name);
    setWeather(weatherData.data);

    const forecastData = await getForecast(city.name);
    setForecast(forecastData.data);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Weather Dashboard
      </Typography>
      <SearchBar onCitySelect={handleCitySelect} />
      {weather && <CurrentWeather weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </Container>
  );
};

export default App;
