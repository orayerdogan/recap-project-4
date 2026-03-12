/** Diese Komponente stellt ein wiederverwendbares Eingabefeld für Farbwerte dar.
 *
 * Sie kombiniert zwei Eingabefelder:
 * 1. Ein Textfeld → zur manuellen Eingabe eines Hex-Wertes
 * 2. Einen Color-Picker → zur visuellen Auswahl einer Farbe
 *
 * Beide Inputs greifen auf denselben Wert zu und aktualisieren denselben State.
 * Dadurch bleibt der Farbwert immer synchron.
 *
 * Props:
 *
 * @param {string} label
 * Beschriftung des Eingabefelds (z.B. "Hex" oder "Contrast Text").
 *
 * @param {string} value
 * Aktueller Farbwert im Hex-Format (z.B. "#ff4a11").
 * Dieser Wert kommt aus dem State der Parent-Komponente.
 *
 * @param {Function} onChange
 * Callback-Funktion zum Aktualisieren des Farbwerts.
 * Wird aufgerufen, wenn sich der Wert in einem der Inputs ändert.
 * Der neue Wert wird an die Parent-Komponente weitergegeben.
 */

export default function ColorInput({ label, value, onChange }) {
  return (
    <div className="color-input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <input
        type="color"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}