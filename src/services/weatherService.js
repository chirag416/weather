import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getWeather = (city) => {
  return axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
};

export const getForecast = (city) => {
  return axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
};
