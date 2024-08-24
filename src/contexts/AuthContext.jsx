// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated login function
  const login = async (email, password) => {
    // Here, add your login logic (API call)
    setUser({ email });
  };

  // Simulated logout function
  const logout = () => {
    setUser(null);
  };

  // Simulated authentication check (e.g., check JWT token)
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) {
        setUser(savedUser);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Value provided to context consumers
  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
