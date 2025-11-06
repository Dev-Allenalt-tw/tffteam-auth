import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setMsg("✅ Login successful!");
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="p-2 bg-red-900/20 rounded w-full text-center"
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
        className="p-2 bg-red-900/20 rounded w-full text-center"
      />
      <button className="w-full bg-red-700 hover:bg-red-800 py-2 rounded font-bold">
        Login
      </button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </form>
  );
}
