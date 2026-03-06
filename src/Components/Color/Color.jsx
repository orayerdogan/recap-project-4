import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [confirm, setConfirm] = useState(false);
  return (
    <div
      className="color-card"
      style={{
        backgroundColor: color.hex,
        color: color.contrastText,
      }}
    >
      <h2 className="color-card-headline">{color.role}</h2>
      <p>Hex: {color.hex}</p>
      <p>Contrast: {color.contrastText}</p>

      {confirm ? (
        <div className="color-card-highlight">
          <p>Are You Sure</p>
          <button onClick={() => onDelete(color.id)}>Yes</button>
          <button onClick={() => setConfirm(false)}>No</button>
        </div>
      ) : (
        <button onClick={() => setConfirm(true)}>Delete</button>
      )}
    </div>
  );
}
