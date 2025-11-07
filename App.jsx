import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import "./style.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      <div className="relative w-[900px] h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Login switchToRegister={() => setIsLogin(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Register switchToLogin={() => setIsLogin(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
