import axios from "axios";

// Charge les variables d'environnement depuis le fichier .env
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getForecastWeatherData = async (city, lang) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts&lang=${lang}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSearchWeatherData = async (city, lang) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${city}&aqi=yes&lang=${lang}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCitySuggestions = async (searchString, userLanguage) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchString}&aqi=yes&lang=${userLanguage}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default {
  getForecastWeatherData,
  getSearchWeatherData,
  getCitySuggestions,
};
