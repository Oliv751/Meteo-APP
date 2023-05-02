import { useState } from "react";
import UserForm from "../components/UserForm";
import Weather from "../components/Weather";

export default function Home() {
  const [searchedCity, setSearchedCity] = useState("");

  const handleSearch = (city) => {
    setSearchedCity(city);
  };

  return (
    <>
      <UserForm handleSearch={handleSearch} />
      {searchedCity && <Weather city={searchedCity} />}
    </>
  );
}
