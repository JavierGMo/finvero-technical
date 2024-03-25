"use client";

import { useForm } from "react-hook-form";
import { PageHeader } from "../pages/page-header";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { infer as zodInfer } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "@/lib/validations/product";
import { defaultValuesCreateProduct } from "@/lib/values/product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { TextInput } from "../inputs/text-input";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createProductService } from "@/services/products";
import { useToast } from "@/hooks/useToast";
import { ToastAction } from "../ui/toast";

export const CreateProductView = () => {
  const form = useForm<zodInfer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema),
    defaultValues: defaultValuesCreateProduct,
  });
  const { toast } = useToast();
  const handleCreateProduct = (
    values: zodInfer<typeof createProductSchema>
  ) => {
    Promise.resolve(
      createProductService({
        name: values.name,
        fileImage: values.image,
        price: Number(values.price),
      })
    )
      .then((createdProduct) => {
        console.log("Created product", createdProduct);
        toast({
          title: "Producto creado",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          variant: "destructive",
          title: "Uh oh! Algo salio mal",
          description: "Error al crear el producto",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  };
  return (
    <PageHeader titlePage="Crear producto">
      <Card className="sm:mx-auto w-full sm:max-w-sm mt-5">
        <CardHeader>
          <p className="font-medium">Crea tu producto</p>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateProduct)}>
            <CardContent>
              <TextInput
                name="name"
                label="Nombre del producto"
                placherholder="Nombre del producto"
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagen del producto</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onBlur={field.onBlur}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.onChange(file);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <TextInput name="price" label="Precio" placherholder="Precio" />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Crear producto
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </PageHeader>
  );
};
