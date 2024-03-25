import { z } from "zod";

export const registerSchema = z
  .object({
    fisrtName: z.string({
      required_error: "El nombre(s) es requerido",
    }),
    lastName: z.string({
      required_error: "Los apellidos son requeridos",
    }),
    email: z
      .string({
        required_error: "El email es requerido",
      })
      .email("Este email es invalido"),
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(8, "La constraseña debe de tener minimo 8 caracteres"),
    confirmPassword: z
      .string({ required_error: "La contraseña es requerida" })
      .min(8, "La constraseña debe de tener minimo 8 caracteres"),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Las constraseña no es igual",
      path: ["confirmPassword"],
    }
  );
