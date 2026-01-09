import { useState } from "react";

export default function ChoiceGenerator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const options = input
    .split("\n")
    .map(o => o.trim())
    .filter(Boolean);

  const pickRandom = () => {
    if (!options.length) return;
    setResult(options[Math.floor(Math.random() * options.length)]);
  };

  return (
    <div className="container">
      <h1>Random Choice Generator</h1>

      <textarea
        placeholder="Enter one option per line"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={pickRandom}>Pls pick for me</button>

      {result && <div className="result">{result}</div>}
    </div>
  );
}
