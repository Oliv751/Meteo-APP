import { useState } from "react";
import PropTypes from "prop-types";
import weatherApi from "../services/weatherApi";

function UserForm({ handleSearch }) {
  const [city, setCity] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [error, setError] = useState(false); // nouvel état d'erreur

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city.length < 3) {
      // validation de la longueur minimale de la ville
      setError(true); // définit l'état d'erreur sur true
      return;
    }
    setError(false); // sinon, définir l'état d'erreur sur false
    await handleSearch(city);
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    setCity(value);
    // Récupère les suggestions de villes depuis l'API si la valeur n'est pas vide
    if (value !== "") {
      const suggestions = await weatherApi.getSearchWeatherData(value);
      const sortedSuggestions = suggestions.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCitySuggestions(sortedSuggestions);
    }
    handleSubmit();
  };

  const handleCityClick = async (cityName) => {
    setCity(cityName);
    await handleSearch(cityName);
  };

  // Affiche la liste déroulante avec les suggestions de villes
  const renderSuggestions = () => {
    if (citySuggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {citySuggestions.map((cityObj) => (
          <li key={cityObj.id}>
            <button type="button" onClick={() => handleCityClick(cityObj.name)}>
              {cityObj.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Ville:</label>
      <input
        list="city-suggestions"
        type="text"
        placeholder="Search your city ..."
        id="city"
        name="city"
        required
        pattern="[A-Za-z\s]+"
        maxLength="50"
        value={city}
        onChange={handleChange}
      />
      <datalist id="city-suggestions">
        {citySuggestions.map((cityName) => (
          <option
            label={cityName.name}
            value={cityName.name}
            key={cityName.id}
          />
        ))}
      </datalist>
      {error && <p>Please enter at least 3 characters.</p>}{" "}
      {/* Affiche un message d'erreur s'il y a une erreur */}
      {renderSuggestions()}
      <button type="submit">Rechercher</button>
    </form>
  );
}

UserForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default UserForm;
