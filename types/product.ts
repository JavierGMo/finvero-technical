export interface Product {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
}

export interface RequestProducts {
  products: Product[];
  pages: number;
  count: number;
  hasNext: boolean;
}
