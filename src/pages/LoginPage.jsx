// src/pages/LoginPage.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login("test@example.com", "password");
  };

  return (
    <div className="p-4">
      <h2>Login Page</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
