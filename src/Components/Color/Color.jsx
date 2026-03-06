import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDelete, onEdit }) {
  const [confirm, setConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        backgroundColor: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <ColorForm
          addColor={(updatedColor) => {
            onEdit(updatedColor);
            setIsEditing(false);
          }}
          initialColor={color}
        />
      ) : (
        <>
          <h2 className="color-card-headline">{color.role}</h2>
          <p>Hex: {color.hex}</p>
          <CopyToClipboard text={color.hex} />
          <p>Contrast: {color.contrastText}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          {confirm ? (
            <div className="color-card-highlight">
              <p>Are You Sure</p>

              <button onClick={() => onDelete(color.id)}>Yes</button>
              <button onClick={() => setConfirm(false)}>No</button>
            </div>
          ) : (
            <button onClick={() => setConfirm(true)}>Delete</button>
          )}
        </>
      )}
    </div>
  );
}