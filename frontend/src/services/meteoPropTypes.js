// Definition: PropTypes for meteo object
import PropTypes from "prop-types";

const meteoPropTypes = PropTypes.shape({
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    tz_id: PropTypes.string.isRequired,
    localtime_epoch: PropTypes.number.isRequired,
    localtime: PropTypes.string.isRequired,
  }),
  current: PropTypes.shape({
    last_updated_epoch: PropTypes.number.isRequired,
    last_updated: PropTypes.string.isRequired,
    temp_c: PropTypes.number.isRequired,
    temp_f: PropTypes.number.isRequired,
    is_day: PropTypes.number.isRequired,
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      code: PropTypes.number.isRequired,
    }),
    wind_mph: PropTypes.number.isRequired,
    wind_kph: PropTypes.number.isRequired,
    wind_degree: PropTypes.number.isRequired,
    wind_dir: PropTypes.string.isRequired,
    pressure_mb: PropTypes.number.isRequired,
    pressure_in: PropTypes.number.isRequired,
    precip_mm: PropTypes.number.isRequired,
    precip_in: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    cloud: PropTypes.number.isRequired,
    feelslike_c: PropTypes.number.isRequired,
    feelslike_f: PropTypes.number.isRequired,
    vis_km: PropTypes.number.isRequired,
    vis_miles: PropTypes.number.isRequired,
    uv: PropTypes.number.isRequired,
    gust_mph: PropTypes.number.isRequired,
    gust_kph: PropTypes.number.isRequired,
  }),
  forecast: PropTypes.shape({
    forecastday: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        date_epoch: PropTypes.number.isRequired,
        day: PropTypes.shape({
          maxtemp_c: PropTypes.number.isRequired,
          maxtemp_f: PropTypes.number.isRequired,
          mintemp_c: PropTypes.number.isRequired,
          mintemp_f: PropTypes.number.isRequired,
          avgtemp_c: PropTypes.number.isRequired,
          avgtemp_f: PropTypes.number.isRequired,
          maxwind_mph: PropTypes.number.isRequired,
          maxwind_kph: PropTypes.number.isRequired,
          totalprecip_mm: PropTypes.number.isRequired,
          totalprecip_in: PropTypes.number.isRequired,
          avgvis_km: PropTypes.number.isRequired,
          avgvis_miles: PropTypes.number.isRequired,
          avghumidity: PropTypes.number.isRequired,
          daily_will_it_rain: PropTypes.number.isRequired,
          daily_chance_of_rain: PropTypes.number.isRequired,
          daily_will_it_snow: PropTypes.number.isRequired,
          daily_chance_of_snow: PropTypes.number.isRequired,
          condition: PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
          }),
          uv: PropTypes.number.isRequired,
        }),
        astro: PropTypes.shape({
          sunrise: PropTypes.string.isRequired,
          sunset: PropTypes.string.isRequired,
          moonrise: PropTypes.string.isRequired,
          moonset: PropTypes.string.isRequired,
          moon_phase: PropTypes.string.isRequired,
          moon_illumination: PropTypes.string.isRequired,
        }),
      })
    ),
  }),
});

export default meteoPropTypes;

// Path: frontend\src\services\weatherApi.js
// Compare this snippet from frontend\src\services\weatherApi.js:
