// src/pages/HomePage.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-4">
      <h1>Welcome to the Home Page!</h1>
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => login("test@example.com", "password")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default HomePage;
