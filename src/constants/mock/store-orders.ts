import type { OrderType } from "@types";

export const storefrontOrders: OrderType[] = [
  {
    _id: "ORD-001-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 7980, // in cents
    status: "success",
    products: [
      {
        name: "Adidas CoreFit T-Shirt",
        quantity: 1,
        price: 3990,
      },
      {
        name: "Nike Air Max 270",
        quantity: 1,
        price: 3990,
      }
    ],
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    _id: "ORD-002-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 8990,
    status: "success",
    products: [
      {
        name: "Puma Ultra Warm Zip",
        quantity: 1,
        price: 8990,
      }
    ],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    _id: "ORD-003-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 19980,
    status: "failed",
    products: [
      {
        name: "Under Armour StormFleece",
        quantity: 1,
        price: 9990,
      },
      {
        name: "Herschel Little America Backpack",
        quantity: 1,
        price: 9990,
      }
    ],
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  }
]
