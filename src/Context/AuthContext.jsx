import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUser) setUser(storedUser);
    if (storedUsers.length) setRegisteredUsers(storedUsers);
  }, []);

  // Signup: Add new user to localStorage and update state
  const signup = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existing = users.find((u) => u.email === newUser.email);
    if (existing) throw new Error("User already exists.");

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setRegisteredUsers(users);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  // Login: Authenticate using localStorage
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      setUser(matchedUser);
      return matchedUser;
    }

    return null;
  };

  // Logout: Clear session
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, registeredUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
