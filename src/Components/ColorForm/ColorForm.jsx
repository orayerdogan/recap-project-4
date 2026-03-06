import { useState } from "react";
import ColorInput from "./ColorInput";
import { nanoid } from "nanoid";
import "./ColorForm.css";

export default function ColorForm({ addColor, initialColor }) {
  const [role, setRole] = useState(initialColor?.role || "Primary main");
  const [hex, setHex] = useState(initialColor?.hex || "#ff4a11");
  const [contrastText, setContrastText] = useState(
    initialColor?.contrastText || "#FFFFFF",
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const newColor = {
      id: initialColor?.id || nanoid(),
      role,
      hex,
      contrastText,
    };
    addColor(newColor);

    if (!initialColor) {
      setRole("Primary main");
      setHex("#ff4a11");
      setContrastText("#FFFFFF");
    }
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
      <button type="submit">
        {initialColor ? "Update Color" : "Add Color"}
      </button>
    </form>
  );
}
