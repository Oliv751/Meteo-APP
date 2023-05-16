import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import weatherApi from "../services/weatherApi";

function Weather({ city }) {
  const [userLanguage, setUserLanguage] = useState("en");
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [searchWeatherData, setSearchWeatherData] = useState(null);

  useEffect(() => {
    setUserLanguage(navigator.language.substring(0, 2)); // extrait la langue avant le tiret (-)
  }, []);

  useEffect(() => {
    async function fetchWeatherData() {
      const forecastData = await weatherApi.getForecastWeatherData(
        city,
        userLanguage
      );
      setForecastWeatherData(forecastData);
      // console.log(forecastData);

      const searchData = await weatherApi.getSearchWeatherData(
        city,
        userLanguage
      );
      setSearchWeatherData(searchData);
      // console.log(searchWeatherData);
    }

    fetchWeatherData();
  }, [city, userLanguage]);

  // useEffect(() => {
  //   console.log(searchWeatherData);
  // }, [searchWeatherData]);

  return (
    <div>
      {forecastWeatherData ? (
        <>
          <h2>{forecastWeatherData.location.name}</h2>
          <p>Country: {forecastWeatherData.location.country}</p>
          <p>Local time: {forecastWeatherData.location.localtime}</p>
          <p>Latitude: {forecastWeatherData.location.lat}</p>
          <p>Longitude: {forecastWeatherData.location.lon}</p>
          <p>Timezone: {forecastWeatherData.location.tz_id}</p>
          <p>Region: {forecastWeatherData.location.region}</p>

          <h3>Current weather</h3>

          <p>Is day: {forecastWeatherData.current.is_day}</p>
          <p>Condition code: {forecastWeatherData.current.condition.code}</p>
          <img
            src={forecastWeatherData.current.condition.icon}
            alt="weather icon"
          />
          <p>Condition: {forecastWeatherData.current.condition.text}</p>
          <p>Temperature: {forecastWeatherData.current.temp_c}°C</p>
          <p>Feels like: {forecastWeatherData.current.feelslike_c}°C</p>
          <p>Cloud: {forecastWeatherData.current.cloud}</p>
          <p>Wind speed: {forecastWeatherData.current.wind_kph} km/h</p>
          <p>Wind: {forecastWeatherData.current.wind_kph} km/h</p>
          <p>Wind direction: {forecastWeatherData.current.wind_dir}</p>
          <p>Precipitation: {forecastWeatherData.current.precip_mm} mm</p>
          <p>uv: {forecastWeatherData.current.uv}</p>

          <p>Visibility: {forecastWeatherData.current.vis_km} km</p>
          <p>Pressure: {forecastWeatherData.current.pressure_mb} mb</p>
          <p>Humidity: {forecastWeatherData.current.humidity} %</p>
          <p>
            air quality: {forecastWeatherData.current.air_quality.co} Carbon
            Monoxide (μg/m3)
          </p>

          <h3>Forecast weather</h3>

          {forecastWeatherData.forecast.forecastday.map((day) => (
            <div key={day.date}>
              <h4>{day.date}</h4>
              <p>Max temperature: {day.day.maxtemp_c}°C</p>
              <p>Min temperature: {day.day.mintemp_c}°C</p>
              <p>Average temperature: {day.day.avgtemp_c}°C</p>
              <p>Max wind speed: {day.day.maxwind_kph} km/h</p>
              <p>Total precipitation: {day.day.totalprecip_mm} mm</p>
              <p>Average humidity: {day.day.avghumidity} %</p>
              <p>UV: {day.day.uv}</p>
              <p>Condition code: {day.day.condition.code}</p>
              <img src={day.day.condition.icon} alt="weather icon" />
              <p>Condition: {day.day.condition.text}</p>
              <p>desc: {}</p>
            </div>
          ))}

          <h3>Alerts</h3>
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
