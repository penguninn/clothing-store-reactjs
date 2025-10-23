// Product Types
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

// Order Types
export interface OrderType {
  _id: string;
  userId: string;
  email: string;
  amount: number; // in cents
  status: "success" | "failed";
  products: {
    name: string;
    quantity: number;
    price: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// User Types
export interface UserType {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "user";
  createdAt: Date;
  status: "active" | "inactive";
}

// Chart Data Types
export interface OrderChartType {
  month: string;
  total: number;
  successful: number;
}

// Category Type
export interface CategoryType {
  id: number;
  name: string;
  slug: string;
}
