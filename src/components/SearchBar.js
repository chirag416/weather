import React, { useState } from 'react';
import { TextField, List, ListItem } from '@mui/material';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const SearchBar = ({ onCitySelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

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
    if (e.target.value) {
      fetchSuggestions(e.target.value);
    } else {
      setSuggestions([]);
    }
  };

  const handleCitySelect = (city) => {
    onCitySelect(city);
    setQuery(city.name + ', ' + city.region + ', ' + city.country);  // Set the search input to the selected city
    setSuggestions([]);  // Clear the suggestions
  };

  return (
    <div>
      <TextField
        label="Search City"
        value={query}
        onChange={handleInputChange}
        fullWidth
      />
      <List>
        {suggestions.map((city, index) => (
          <ListItem key={index} button onClick={() => handleCitySelect(city)}>
            {city.name}, {city.region}, {city.country}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchBar;
