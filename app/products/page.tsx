import { Metadata } from "next";
import { PageHeader } from "../components/pages/page-header";
import { ProductsView } from "../components/products/products-view";

export const metadata: Metadata = {
  title: "Productos",
};

export default function ProductPage() {
  return (
    <PageHeader titlePage="Productos">
      <ProductsView />
    </PageHeader>
  );
}
