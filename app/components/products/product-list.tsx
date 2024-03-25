import { Product } from "@/types/product";
import { ProductCard } from "./product-card";

const products: Product[] = [
  {
    price: 1000,
    title: "Carcasa",
  },
  {
    price: 1000,
    title: "Carcasa Rosa",
  },
  {
    price: 10200,
    title: "Carcasa Negra",
  },
  {
    price: 1200,
    title: "Carcasa Azul",
  },
];

export const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 my-3">
      {products.map((product, idx) => (
        <ProductCard
          key={`${product.title}-${idx}`}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};
