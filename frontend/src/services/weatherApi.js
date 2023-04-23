import axios from "axios";

// Charge les variables d'environnement depuis le fichier .env
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default { getWeatherData };
