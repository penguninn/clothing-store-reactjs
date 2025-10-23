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

// Cart Types
export interface CartItemType extends ProductType {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export type CartItemsType = CartItemType[];

// Order Types
export interface OrderProductType {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderType {
  _id: string;
  userId: string;
  email: string;
  amount: number; // in cents
  status: "success" | "failed";
  products: OrderProductType[];
  createdAt: Date;
  updatedAt: Date;
}

// Shipping Form Types
export interface ShippingFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

// Category Type
export interface CategoryType {
  name: string;
  slug: string;
  icon: React.ReactNode;
}
