import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import weatherApi from "../services/weatherApi";

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const data = await weatherApi.getWeatherData(city);
      setWeatherData(data);
    }

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Description: {weatherData.current.condition.text}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

Weather.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Weather;
