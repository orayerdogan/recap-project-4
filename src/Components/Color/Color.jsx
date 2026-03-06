import "./Color.css";

export default function Color({ color }) {
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
    </div>
  );
}
