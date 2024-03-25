import { PaginationAsync } from "../pagination-async";
import { Pagination } from "../ui/pagination";
import { ProductList } from "./product-list";

export const ProductsView = () => {
  return (
    <>
      <ProductList />
      <PaginationAsync />
    </>
  );
};
