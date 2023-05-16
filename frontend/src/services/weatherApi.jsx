import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { createApi } from "unsplash-js";

/// //////////////////// WEATHER API ///////////////////////

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

/// //////////////////// UNSPLASH API ///////////////////////

const unsplashApi = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
});

function PhotoComp({ photo }) {
  const { user, urls } = photo;

  return (
    <>
      <img className="img" alt="wallpaperImg" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
        rel="noreferrer"
      >
        {user.name}
      </a>
    </>
  );
}

export function UnsplashBody() {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    unsplashApi.search
      .getPhotos({ query: "landscape", orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.warn("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }
  if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  }
  return (
    <div className="feed">
      <ul className="columnUl">
        {data.response.results.map((photo) => (
          <li key={photo.id} className="li">
            <PhotoComp photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

PhotoComp.propTypes = {
  photo: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default {
  getForecastWeatherData,
  getSearchWeatherData,
  getCitySuggestions,
};
