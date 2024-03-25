import { Product } from "@/types/product";

interface CheckoutProductParams {
  userId: number;
  products: Product[];
}

interface ProductForm extends Product {
  fileImage: File;
}

export const createProductService = async (values: ProductForm) => {
  const formData = new FormData();
  formData.append("image", values.fileImage);
  formData.append("name", values.name ?? "");
  formData.append("price", `${values.price}`);
  const req = await fetch("/api/product/create", {
    method: "POST",
    body: formData,
  });
  const data = await req.json();
  if (!req.ok) throw new RequestError(data.error ?? "", req.status, data.meta);

  return data;
};
export const checkoutProduct = async (values: CheckoutProductParams) => {
  const req = await fetch("/api/product/checkout", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await req.json();
  if (!req.ok) throw new RequestError(data.error ?? "", req.status, data.meta);

  return data;
};
