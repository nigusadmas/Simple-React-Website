import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
  const [user] = useAuthState(auth);

  return user ? <Chat /> : <Login />;
}