import { z } from "zod";

export const createProductSchema = z
  .object({
    name: z.string({
      required_error: "El nombre del product es requerido",
    }),
    image: z.instanceof(File).refine(
      (file) => {
        console.log(file?.size);

        if (!file) return false;
        console.log("file", file);

        return file.size < 600000;
      },
      { message: "El archivo exede el tamaño permitido" }
    ),
    price: z.string({
      required_error: "El precio es requerido",
    }),
  })
  .refine(
    (value) => {
      console.log("vale", value);

      return !!isNaN(Number(value));
    },
    {
      message: "Debes de escribir un numero",
      path: ["price"],
    }
  );
