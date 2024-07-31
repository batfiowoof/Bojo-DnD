import useRaces from "../hooks/useRace";
import axios from "axios";
import Input from "./Input";

export function Form() {
  const { loading, selectedRace, subraces, error, races, handleRaceChange } =
    useRaces();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const character = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/api/characters", character)
      .then((response) => console.log("Character created:", response.data))
      .catch((error) => console.error("Error creating character:", error));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Input label="Name" type="text" name="name" />
      <div className="form-group">
        <label className="form-label" htmlFor="race">
          Race:
        </label>
        <select
          name="race"
          id="race"
          className="form-input"
          value={selectedRace}
          onChange={handleRaceChange}
        >
          {loading ? (
            <option>Loading...</option>
          ) : (
            races.map((race) => (
              <option key={race.index} value={race.index}>
                {race.name}
              </option>
            ))
          )}
        </select>
      </div>
      {error && <p className="error-message">{error.message}</p>}

      {subraces.length > 0 && (
        <div className="form-group">
          <label className="form-label" htmlFor="subrace">
            Subrace:
          </label>
          <select name="subrace" id="subrace" className="form-input">
            {subraces.map((subrace) => (
              <option key={subrace.index} value={subrace.index}>
                {subrace.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <button type="submit" className="form-button" disabled={loading}>
        Create Character
      </button>
    </form>
  );
}
