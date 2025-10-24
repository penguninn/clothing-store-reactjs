export interface OrderProductType {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderType {
  _id: string;
  userId: string;
  email: string;
  amount: number;
  status: "success" | "failed";
  products: OrderProductType[];
  createdAt: Date;
  updatedAt: Date;
}
