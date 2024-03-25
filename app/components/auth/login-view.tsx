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
import { FormEvent, useState } from "react";

export const LoginView = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("e", e);
    const isValidEmail = RegexMail.test(values.email);
    console.log("values", values, RegexMail.test(values.email), isValidEmail);

    if (!isValidEmail) {
      console.log("no es un emial valido");
      setIsValidEmail(false);
      return;
    }
  };
  return (
    <Card className="sm:mx-auto w-full  sm:max-w-sm">
      <CardHeader className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center"></div>
      </CardHeader>
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
              <p className="mt-2 text-sm">Email invalido</p>
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
              <p className="mt-2 text-sm">Contraseña invalida</p>
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
    </Card>
  );
};
