"use client";
import { Product } from "@/types/product";
import { ProductCard } from "./product-card";

interface ProductListProps {
  products?: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-5 my-3">
      {products
        ? products.map((product, idx) => (
            <ProductCard
              key={`${product.name}-${idx}`}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        : null}
    </div>
  );
};
