import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);
  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };
  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
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
          <Color key={color.id} color={color} onDelete={deleteColor} />
        ))
      )}
    </div>
  );
}

export default App;
