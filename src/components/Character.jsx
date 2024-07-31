import CharacterCard from "./CharacterCard";
import logo from "../assets/dnd-logo.png";

export default function Character() {
  const characters = [
    {
      name: "Aragorn",
      image: { logo },
      race: "Human",
      charClass: "Ranger",
      level: 5,
      attributes: {
        strength: 18,
        dexterity: 14,
        constitution: 16,
        intelligence: 12,
        wisdom: 13,
        charisma: 17,
      },
      hitPoints: 45,
      equipment: ["Sword", "Shield", "Bow", "Arrows"],
    },
    {
      name: "Legolas",
      image: { logo },
      race: "Elf",
      charClass: "Archer",
      level: 5,
      attributes: {
        strength: 14,
        dexterity: 20,
        constitution: 12,
        intelligence: 16,
        wisdom: 15,
        charisma: 14,
      },
      hitPoints: 40,
      equipment: ["Bow", "Arrows", "Dagger"],
    },
    {
      name: "Gimli",
      image: { logo },
      race: "Dwarf",
      charClass: "Warrior",
      level: 5,
      attributes: {
        strength: 19,
        dexterity: 12,
        constitution: 18,
        intelligence: 10,
        wisdom: 14,
        charisma: 13,
      },
      hitPoints: 50,
      equipment: ["Axe", "Helmet", "Chainmail"],
    },
    {
      name: "Gimli",
      image: { logo },
      race: "Dwarf",
      charClass: "Warrior",
      level: 5,
      attributes: {
        strength: 19,
        dexterity: 12,
        constitution: 18,
        intelligence: 10,
        wisdom: 14,
        charisma: 13,
      },
      hitPoints: 50,
      equipment: ["Axe", "Helmet", "Chainmail"],
    },
  ];

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
