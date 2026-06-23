import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  role: string;
  login: (role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [role, setRole] = useState("Admin");

  const login = (userRole: string) => {
    setRole(userRole);
  };

  const logout = () => {
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};