import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useRaces = () => {
  const [loading, setLoading] = useState(false);
  const [selectedRace, setSelectedRace] = useState("");
  const [subraces, setSubraces] = useState([]);
  const [error, setError] = useState(null);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.dnd5eapi.co/api/races")
      .then((response) => {
        setRaces(response.data.results);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        error.message = "Error fetching races";
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleRaceChange = useCallback((e) => {
    setSelectedRace(e.target.value);
    setLoading(true);
    axios
      .get(`https://www.dnd5eapi.co/api/races/${e.target.value}/subraces`)
      .then((response) => {
        setSubraces(response.data.results);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        error.message = "Error fetching subraces";
        setError(error);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    selectedRace,
    subraces,
    error,
    races,
    handleRaceChange,
  };
};

export default useRaces;
