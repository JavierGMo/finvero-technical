"use client";

import { AuthContext } from "@/providers/auth-provider";
import { useContext } from "react";

export const useSession = () => {
  const { session, isAuthenticated, setSession, unsetSession } =
    useContext(AuthContext);
};
