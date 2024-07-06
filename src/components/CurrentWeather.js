import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeather = ({ weather }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.location.name}, {weather.location.region}, {weather.location.country}</Typography>
        <Typography variant="h6">{weather.current.temp_c}°C</Typography>
        <Typography variant="body1">Condition: {weather.current.condition.text}</Typography>
        <Typography variant="body1">Humidity: {weather.current.humidity}%</Typography>
        <Typography variant="body1">Wind Speed: {weather.current.wind_kph} kph</Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
