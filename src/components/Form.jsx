import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Input from "./Input";

export function Form({ onSubmit }) {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRace, setSelectedRace] = useState("");
  const [subraces, setSubraces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.dnd5eapi.co/api/races")
      .then((response) => {
        setRaces(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleRaceChange = useCallback((e) => {
    setSelectedRace(e.target.value);
    setLoading(true);
    axios
      .get(`https://www.dnd5eapi.co/api/races/${e.target.value}/subraces`)
      .then((response) => {
        setSubraces(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
      <button type="submit" className="form-button">
        Create Character
      </button>
    </form>
  );
}
