"use client";

import { Session } from "@/types/session";
import { ReactNode, createContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderContext {
  session: Session;
  setSession: (session: Session) => void;
  unsetSession: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthProviderContext>({
  session: {},
  setSession(session: Session) {
    this.session = session;
    this.isAuthenticated = true;
    localStorage.setItem("session", JSON.stringify(session));
    localStorage.setItem("isAuthenticated", this.isAuthenticated ? "ok" : "");
  },
  unsetSession() {
    (this.session = {}), (this.isAuthenticated = false);
    localStorage.clear();
  },
  isAuthenticated: false,
});

export const getSession = () => {
  const session: Session = localStorage.getItem("session")
    ? JSON.parse(localStorage.getItem("session") ?? "{}")
    : {};
  const isAuthenticated = localStorage.getItem("isAuthenticated")
    ? !!localStorage.getItem("isAuthenticated")
    : false;

  return {
    session,
    isAuthenticated,
  };
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [gotSession] = useState(getSession());
  const [session, setSession] = useState<Session>(gotSession.session);
  const [isAuthenticated, setIsAuthenticated] = useState(
    gotSession.isAuthenticated
  );
  const handleSetSession = (session: Session) => {
    setSession(session);
    setIsAuthenticated(true);
    // localStorage.setItem("session", JSON.stringify(session));
    // localStorage.setItem("isAuthenticated", isAuthenticated ? "ok" : "");
  };
  const handleUnSetSession = () => {
    setSession({});
    setIsAuthenticated(false);
    localStorage.clear();
  };
  return (
    <AuthContext.Provider
      value={{
        session,
        isAuthenticated,
        setSession: handleSetSession,
        unsetSession: handleUnSetSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
