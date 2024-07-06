import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CurrentWeather = ({ weather, onAddFavorite, onRemoveFavorite, favorites }) => {
  const isFavorite = () => {
    return favorites.some(fav => fav.name === weather.location.name);
  };

  const handleFavoriteClick = () => {
    if (isFavorite()) {
      onRemoveFavorite(weather.location);
    } else {
      onAddFavorite(weather.location);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {weather.location.name}, {weather.location.region}, {weather.location.country}
        </Typography>
        <Typography variant="h6">{weather.current.temp_c}°C</Typography>
        <Typography variant="body1">Condition: {weather.current.condition.text}</Typography>
        <Typography variant="body1">Humidity: {weather.current.humidity}%</Typography>
        <Typography variant="body1">Wind Speed: {weather.current.wind_kph} kph</Typography>
        <Button
          onClick={handleFavoriteClick}
          variant={isFavorite() ? 'outlined' : 'contained'}
          color={isFavorite() ? 'secondary' : 'primary'}
          sx={{ mt: 2 }}
        >
          {isFavorite() ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
