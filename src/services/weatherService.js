import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return response;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
    return response;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};
