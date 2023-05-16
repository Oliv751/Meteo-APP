import { useState } from "react";
import { UnsplashBody } from "../services/weatherApi";
import UserForm from "../components/UserForm";
import Weather from "../components/Weather";

export default function Home() {
  const [searchedCity, setSearchedCity] = useState("");
  const [searchWeatherData, setSearchWeatherData] = useState(null);

  const handleSearch = (city) => {
    setSearchedCity(city);
  };
  // console.log(searchWeatherData);

  return (
    <div className="container">
      <UnsplashBody />
      <div className="content">
        <UserForm
          handleSearch={handleSearch}
          searchWeatherData={searchWeatherData}
        />
        {searchedCity && (
          <Weather
            city={searchedCity}
            handleSearchWeatherData={setSearchWeatherData}
          />
        )}
      </div>
    </div>
  );
}
