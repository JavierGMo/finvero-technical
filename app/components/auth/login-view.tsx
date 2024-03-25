"use client";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RegexMail } from "@/constants/regexs";
import { FormEvent, useContext, useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Icons } from "../icons";
import { CardAuth } from "./card-auth";
import { loginService } from "@/services/auth";
import { AuthContext } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";

export const LoginView = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const { setSession } = useContext(AuthContext);
  const router = useRouter();
  const { toast } = useToast();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = RegexMail.test(values.email);

    if (!isValidEmail) {
      setIsValidEmail(false);
      return;
    }
    Promise.resolve(loginService(values.email, values.password))
      .then((session) => {
        console.log("authasdhas das", session);

        setSession({
          user: session.user,
          token: session.token,
        });
        toast({
          title: "Inicio de sesión exitosa",
        });
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <CardAuth>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="my-2">
            <Label>Correo</Label>
            <Input
              value={values.email}
              onChange={({ target: { value } }) => {
                setValues((v) => ({
                  ...v,
                  email: value,
                }));
                setIsValidEmail(!!value);
                console.log("regex", RegexMail.test(value), value);
                // setIsValidEmail(RegexMail.test(value));
              }}
            />
            {!isValidEmail ? (
              <p className="text-red-600 mt-2 text-sm">Email invalido</p>
            ) : null}
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={values.password}
              onChange={({ target: { value } }) => {
                setValues((v) => ({
                  ...v,
                  password: value,
                }));
                setIsValidPassword(!!value);
                console.log("regex", RegexMail.test(value), value);
              }}
            />
            {isValidPassword ? null : (
              <p className="text-red-600 mt-2 text-sm">Contraseña invalida</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            className="w-full"
            type="submit"
            disabled={!isValidEmail && !isValidPassword}
          >
            Iniciar Sesión
          </Button>
        </CardFooter>
      </form>
    </CardAuth>
  );
};
