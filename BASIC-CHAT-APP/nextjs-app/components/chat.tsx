"use client";

import { useState } from "react";

export function Chat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <span>{response}</span>
      <div>
        <input
          disabled={loading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "400px",
            height: "48px",
            fontSize: "1.25rem",
            background: "rgba(255,255,255,0.1)",
            color: "whitesmoke",
            border: "1.5px solid gray",
            borderRadius: "16px",
            outline: "none",
            padding: "0 16px",
            boxSizing: "border-box",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          }}
          placeholder="Type your message..."
        />
        <button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            setMessage("");
            fetch("/api/chat", {
              method: "POST",
              body: JSON.stringify({
                message,
              }),
            })
              .then(async (res) => {
                if (res.ok) {
                  await res.json().then((data) => {
                    setError("");
                    setResponse(data.message);
                  });
                } else {
                  await res.json().then((data) => {
                    setError(data.error);
                    setResponse("");
                  });
                }
              })
              .finally(() => setLoading(false));
          }}
          style={{
            marginLeft: "16px",
            padding: "0 32px",
            height: "48px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "whitesmoke",
            background: "linear-gradient(90deg, #6a5af9 0%, #f857a6 100%)",
            border: "none",
            borderRadius: "16px",
            boxShadow: "0 0 16px 4px rgba(106,90,249,0.5), 0 0 32px 8px rgba(248,87,166,0.3)",
            transition: "box-shadow 0.3s",
            cursor: loading ? "not-allowed" : "pointer",
            outline: "none",
            position: "relative",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
