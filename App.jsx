import React, { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white font-mono">
      <h1 className="text-4xl font-bold text-red-500 mb-6">TFF_TEAM AUTH</h1>

      <div className="bg-red-900/20 p-6 rounded-2xl shadow-lg w-80 text-center">
        {page === "login" ? <Login /> : <Register />}
        <button
          onClick={() => setPage(page === "login" ? "register" : "login")}
          className="mt-4 text-sm text-gray-400 hover:text-red-400"
        >
          {page === "login" ? "Create an account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
}
