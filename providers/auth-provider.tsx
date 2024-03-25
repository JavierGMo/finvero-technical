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
  },
  unsetSession() {
    (this.session = {}), (this.isAuthenticated = false);
  },
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSetSession = (session: Session) => {
    setSession(session);
    setIsAuthenticated(true);
  };
  const handleUnSetSession = () => {
    setSession({});
    setIsAuthenticated(false);
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
