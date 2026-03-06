import { useState, useEffect } from "react";

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
