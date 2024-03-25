import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RequestProducts } from "@/types/product";
import { Paginate } from "@/types/global";

export const paginatedProducts = createApi({
  reducerPath: "paginatedProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<RequestProducts, Paginate>({
      query: (q) => `product?perPage=${q.perPage}&page=${q.page}`,
    }),
  }),
});

export const { useGetProductsQuery } = paginatedProducts;
