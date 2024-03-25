import { User } from "./global";

export interface Session {
  token?: string;
  user?: User;
}

export type StatusSession = "unauth" | "auth" | "loading";
