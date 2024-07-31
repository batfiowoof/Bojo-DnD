/* eslint-disable react/prop-types */
export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <div className="hit-points">
        <h3>Hit Points</h3>
        <p>{character.hitPoints}</p>
      </div>
      <div className="character-image">
        <img src={character.image.logo} alt={`${character.name}`} />
      </div>
      <div className="attributes">
        <h3>Attributes</h3>
        <p>
          <strong>Strength:</strong> {character.attributes.strength}
        </p>
        <p>
          <strong>Dexterity:</strong> {character.attributes.dexterity}
        </p>
        <p>
          <strong>Constitution:</strong> {character.attributes.constitution}
        </p>
        <p>
          <strong>Intelligence:</strong> {character.attributes.intelligence}
        </p>
        <p>
          <strong>Wisdom:</strong> {character.attributes.wisdom}
        </p>
        <p>
          <strong>Charisma:</strong> {character.attributes.charisma}
        </p>
      </div>
      <div className="equipment">
        <h3>Equipment</h3>
        <ul>
          {character.equipment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
