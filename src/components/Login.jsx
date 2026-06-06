import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  function signIn() {
    signInWithPopup(auth, provider);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Messenger Clone</h2>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}