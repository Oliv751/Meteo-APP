function UserForm() {
  return (
    <>
      <p>Formulaire</p>
      <label htmlFor="city">Ville:</label>
      <input
        type="text"
        placeholder="Search your city ..."
        id="city"
        name="city"
        required
        pattern="[A-Za-z\s]+"
        maxLength="50"
      />
    </>
  );
}

export default UserForm;
