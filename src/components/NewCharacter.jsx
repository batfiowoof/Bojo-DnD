import Input from "./Input";

export default function NewCharacter() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const character = Object.fromEntries(formData.entries());

    fetch("http://localhost:5000/api/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Input label="Name" type="text" name="name" />
      <button type="submit" className="form-button">
        Create Character
      </button>
    </form>
  );
}
