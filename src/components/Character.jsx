import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Button from "./Button";
import axios from "axios";

export default function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/characters")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <div>
      <h1>Character Page</h1>
      <Button textOnly to="/new">
        Create Character
      </Button>
      <div className="character-container">
        {characters.length === 0 ? (
          <h2>No characters to display! Maybe create one?</h2>
        ) : (
          characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))
        )}
      </div>
    </div>
  );
}
