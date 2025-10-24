import type { ProductType } from "./product";

export interface CartItemType extends ProductType {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export type CartItemsType = CartItemType[];
