import { useState } from "react";
import PropTypes from "prop-types";

function UserForm({ handleSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(city);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Ville:</label>
      <input
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
      <button type="submit">Rechercher</button>
    </form>
  );
}

UserForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default UserForm;
