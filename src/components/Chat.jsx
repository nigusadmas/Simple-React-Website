import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import ChatInput from "./ChatInput";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));

    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  async function sendMessage(text) {
    await addDoc(collection(db, "messages"), {
      text,
      createdAt: serverTimestamp(),
      uid: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      seen: false,
    });
  }

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <div style={{ height: "500px", overflowY: "auto" }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.uid === auth.currentUser.uid ? "right" : "left",
              margin: "10px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px",
                borderRadius: "10px",
                background:
                  msg.uid === auth.currentUser.uid ? "#dcf8c6" : "#fff",
              }}
            >
              <p>{msg.text}</p>
              <small>{msg.name}</small>
            </div>
          </div>
        ))}
      </div>

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}