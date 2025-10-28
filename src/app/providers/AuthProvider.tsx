"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (
    email: string,
    password: string,
    groupName: string,
    companyName: string,
    firstName: string,
    lastName?: string
  ) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("loggedIn");

    if (storedUser && loggedIn === "true") {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return false;

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.email === email && parsedUser.password === password) {
      setUser(parsedUser);
      localStorage.setItem("loggedIn", "true");
      return true;
    }
    return false;
  };

  const register = (
  email: string,
  password: string,
  groupName: string,
  companyName: string,
  firstName: string,
  lastName?: string
) => {
  const newUser = { email, password, groupName, companyName, firstName, lastName };
  localStorage.setItem("user", JSON.stringify(newUser));
  localStorage.setItem("loggedIn", "false"); // User not logged in yet
  setUser(null);
  return true;
};

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
