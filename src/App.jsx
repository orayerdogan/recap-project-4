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
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
