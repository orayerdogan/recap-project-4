import { useState } from "react";
import ColorInput from "./ColorInput";
import { nanoid } from "nanoid";
import "./ColorForm.css";

export default function ColorForm({ addColor }) {
  const [role, setRole] = useState("Primary main");
  const [hex, setHex] = useState("#ff4a11");
  const [contrastText, setContrastText] = useState("#FFFFFF");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };
    addColor(newColor);
  };
  return (
    <form onSubmit={handleSubmit} className="color-form">
      <label>
        Role:{" "}
        <input value={role} onChange={(event) => setRole(event.target.value)} />
      </label>
      <ColorInput label="Hex" value={hex} onChange={setHex} />
      <ColorInput
        label="Contrast Text"
        value={contrastText}
        onChange={setContrastText}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}
