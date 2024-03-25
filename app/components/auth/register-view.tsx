"use client";
import { Button } from "@/app/components/ui/button";
import { CardContent, CardFooter } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { CardAuth } from "./card-auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { infer as zodInfer } from "zod";
import { registerSchema } from "@/lib/validations/authenticate";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValuesRegister } from "@/lib/values/authenticate";
import { TextInput } from "../inputs/text-input";
import { registerUserService } from "@/services/auth";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

export const RegisterView = () => {
  const form = useForm<zodInfer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: defaultValuesRegister,
  });
  const router = useRouter();
  const { toast } = useToast();
  const onSubmit = (values: zodInfer<typeof registerSchema>) => {
    Promise.resolve(registerUserService(values))
      .then((data) => {
        toast({
          title: "Se creo con éxito",
        });
        form.reset();
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <CardAuth>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent>
            <TextInput
              name="fisrtName"
              label="Nombre(s)"
              placherholder="Nombre(s)"
            />
            <TextInput
              name="lastName"
              label="Apellido(s)"
              placherholder="Apellido(s)"
            />
            <TextInput name="email" label="Correo" placherholder="Correo" />
            <TextInput
              name="password"
              label="Contraseña"
              placherholder="Contraseña"
              typeInput="password"
            />
            <TextInput
              name="confirmPassword"
              label="Confirmar contraseña"
              placherholder="Confirmar contraseña"
              typeInput="password"
            />
          </CardContent>

          <CardFooter className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Button className="w-full" type="submit">
              Registrarse
            </Button>
          </CardFooter>
        </form>
      </Form>
    </CardAuth>
  );
};
