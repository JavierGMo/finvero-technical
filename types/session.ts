import { User } from "./global";

export interface Session {
  token?: string;
  user?: User;
}

export interface AuthenticatedUser {
  user: User;
  token: string;
}

export type StatusSession = "unauth" | "auth" | "loading";
