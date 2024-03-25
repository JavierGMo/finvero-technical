import { LoginView } from "@/app/components/auth/login-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio de sesión",
};

export default function LoginPage() {
  return <LoginView />;
}
