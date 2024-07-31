import CharacterCard from "./CharacterCard";

import { characters } from "../dummy-data";

export default function Character() {
  return (
    <div>
      <h1>Character Page</h1>
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
