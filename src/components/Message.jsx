import { auth } from "../firebase";

export default function Message({ message }) {
  const isMe = message.uid === auth.currentUser.uid;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMe ? "flex-end" : "flex-start",
        margin: "5px 0",
      }}
    >
      <div
        style={{
          background: isMe ? "#dcf8c6" : "#fff",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "60%",
          textAlign: "left",
        }}
      >
        {/* MESSAGE TEXT */}
        <div>{message.text}</div>

        {/* USER NAME */}
        <small style={{ display: "block", color: "gray" }}>
          {message.name}
        </small>

        {/* TIME */}
        <small style={{ fontSize: "10px", color: "gray" }}>
          {message.createdAt?.toDate?.().toLocaleTimeString()}
        </small>

        {/* SEEN STATUS (optional) */}
        <small style={{ fontSize: "10px" }}>
          {message.seen ? "✔ Seen" : "✓ Sent"}
        </small>
      </div>
    </div>
  );
}

