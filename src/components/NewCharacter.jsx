import { Form } from "./Form";

import axios from "axios";

export default function NewCharacter() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const character = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/api/characters", character)
      .then((response) => console.log("Character created:", response.data))
      .catch((error) => console.error("Error creating character:", error));
  };

  return <Form onSubmit={handleSubmit} />;
}
