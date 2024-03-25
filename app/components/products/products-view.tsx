"use client";
import { useGetProductsQuery } from "@/store/features/product/services/products";
import { PaginationAsync } from "../pagination-async";
import { ProductList } from "./product-list";
import { useState } from "react";

export const ProductsView = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useGetProductsQuery({
    page,
    perPage: 10,
  });
  return (
    <>
      <ProductList products={data?.products} />
      <PaginationAsync
        hasNext={!!data?.hasNext}
        page={page}
        refetch={async (currentPage) => {
          setPage(() => currentPage);
          refetch();
        }}
      />
    </>
  );
};
