import React, { useState, useEffect } from 'react';
import { TextField, List, ListItemButton, Typography, Button } from '@mui/material';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const SearchBar = ({ onCitySelect, onRemoveFavorite, favorites, selectedCity }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    if (selectedCity) {
      setQuery(''); // Clear the query when a city is selected
      setSuggestions([]); // Clear the suggestions
    }
  }, [selectedCity]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCitySelect = (city) => {
    onCitySelect(city);
    setQuery(''); // Clear the query field
    setSuggestions([]); // Clear the suggestions
  };

  const isFavorite = (city) => {
    return favorites.some(fav => fav.name === city.name && fav.region === city.region && fav.country === city.country);
  };

  const handleRemoveFavoriteClick = (city) => {
    onRemoveFavorite(city);
  };

  return (
    <div>
      <TextField
        label="Search City"
        value={query}
        onChange={handleInputChange}
        fullWidth
      />
      {query === '' && favorites.length > 0 && (
        <div>
          <Typography variant="h6">Favorite Cities</Typography>
          <List>
            {favorites.map((city, index) => (
              <ListItemButton
                key={index}
                onClick={() => handleCitySelect(city)}
              >
                {city.name}, {city.region}, {city.country}
                <Button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the city select from being triggered
                    handleRemoveFavoriteClick(city);
                  }}
                  variant="outlined"
                  color="secondary"
                  sx={{ ml: 2 }}
                >
                  Remove
                </Button>
              </ListItemButton>
            ))}
          </List>
        </div>
      )}
      {suggestions.length > 0 && query !== '' && (
        <List>
          {suggestions.map((city, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleCitySelect(city)}
            >
              {city.name}, {city.region}, {city.country}
              {isFavorite(city) && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the city select from being triggered
                    handleRemoveFavoriteClick(city);
                  }}
                  variant="outlined"
                  color="secondary"
                  sx={{ ml: 2 }}
                >
                  Remove
                </Button>
              )}
            </ListItemButton>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
