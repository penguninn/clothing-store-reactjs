export interface ProductType {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  categorySlug: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductsType = ProductType[];
