import { useState, useEffect } from "react";

/**
 * CopyToClipboard Component
 * -------------------------
 * Diese Komponente ermöglicht es, einen übergebenen Textwert
 * (z.B. einen Hex-Farbwert) in die Zwischenablage des Nutzers zu kopieren.
 *
 * Nach dem erfolgreichen Kopieren wird für kurze Zeit eine visuelle
 * Bestätigung ("Copied!") angezeigt.
 *
 * Props:
 *
 * @param {string} text
 * Der Text, der in die Zwischenablage kopiert werden soll.
 * Beispiel: "#ff4a11"
 */

export default function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div>
      <button onClick={handleCopy}>Copy Hex</button>
      {copied && <span style={{ marginLeft: "8px" }}>Copied!</span>}
    </div>
  );
}
