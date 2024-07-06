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
  const [favorites, setFavorites] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleCitySelect = async (city) => {
    setSelectedCity(city);
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

  const addFavorite = (city) => {
    const updatedFavorites = [...favorites, city];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (city) => {
    const updatedFavorites = favorites.filter(fav => fav.name !== city.name);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Weather Dashboard
      </Typography>
      {isLoggedIn ? (
        <>
          <LogoutButton onLogout={handleLogout} />
          <SearchBar 
            onCitySelect={handleCitySelect} 
            onAddFavorite={addFavorite} 
            onRemoveFavorite={removeFavorite} 
            favorites={favorites} 
          />
          {weather && (
            <CurrentWeather 
              weather={weather} 
              onAddFavorite={addFavorite} 
              onRemoveFavorite={removeFavorite} 
              favorites={favorites} 
            />
          )}
          {forecast && selectedCity && (
            <Forecast 
              forecast={forecast} 
              city={selectedCity} 
              onAddFavorite={addFavorite} 
              onRemoveFavorite={removeFavorite} 
              favorites={favorites} 
            />
          )}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Container>
  );
};

export default App;
