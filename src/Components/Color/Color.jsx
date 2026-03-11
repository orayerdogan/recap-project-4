import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

/**
 * Color Component
 * ----------------
 * Diese Komponente stellt eine einzelne Farbkarte dar.
 * Sie zeigt Informationen über eine Farbe (Rolle, Hex-Wert, Kontrastfarbe)
 * und bietet Funktionen zum:
 *  - Kopieren des Hex-Werts
 *  - Bearbeiten der Farbe
 *  - Löschen der Farbe mit Sicherheitsabfrage
 *  * Props:
 * @param {Object} color - Das Farbobjekt
 * @param {string} color.id - Eindeutige ID der Farbe
 * @param {string} color.role - Beschreibung / Rolle der Farbe (z.B. "Primary")
 * @param {string} color.hex - Hex-Farbwert (z.B. #FF5733)
 * @param {string} color.contrastText - Textfarbe für guten Kontrast
 *
 * @param {Function} onDelete - Callback zum Löschen einer Farbe
 * @param {Function} onEdit - Callback zum Aktualisieren einer Farbe
 */


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