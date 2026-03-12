import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState, useEffect } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";

/**
 * App Component
 * -------------
 * Dies ist die Hauptkomponente der Anwendung "Theme Creator".
 *
 * Die Komponente verwaltet eine Liste von Farben, die ein Theme bilden.
 * Nutzer können:
 * - neue Farben hinzufügen
 * - bestehende Farben löschen
 * - Farben bearbeiten
 *
 * Die Farbdaten werden im React State gespeichert und zusätzlich
 * im localStorage persistiert, damit sie nach einem Seiten-Reload
 * erhalten bleiben.
 */

function App() {
  const [colors, setColors] = useState(() => {
    const saved = localStorage.getItem("themeColors");
    return saved ? JSON.parse(saved) : initialColors;
  });
  useEffect(() => {
    localStorage.setItem("themeColors", JSON.stringify(colors));
  }, [colors]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };
  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };
  const editColor = (updateColor) => {
    setColors(
      colors.map((color) =>
        color.id === updateColor.id ? updateColor : color,
      ),
    );
  };
  return (
    <div className="App">
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />

      {colors.length === 0 ? (
        <p className="color-card-hightlight">
          No colors in the theme. Please add new colors!
        </p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={deleteColor}
            onEdit={editColor}
          />
        ))
      )}
    </div>
  );
}

export default App;
