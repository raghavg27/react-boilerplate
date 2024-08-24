// src/components/layout/NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/form" className="text-white hover:text-gray-300">
            Form
          </Link>
          <Link to="/animation" className="text-white hover:text-gray-300">
            Animation
          </Link>
        </div>

        {/* Auth Links */}
        <div className="flex space-x-4">
          {user ? (
            <>
              <span className="text-white">Hello, {user.email}</span>
              <button
                onClick={logout}
                className="text-white hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
