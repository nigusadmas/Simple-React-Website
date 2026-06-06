import { useState } from "react";

export default function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <div style={{ display: "flex" }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        style={{ flex: 1 }}
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}