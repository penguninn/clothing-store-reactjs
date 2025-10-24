import type { OrderType } from "@types";

export const mockOrders: OrderType[] = [
  {
    _id: "ORD-001-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 7980,
    status: "success",
    products: [
      { name: "Adidas CoreFit T-Shirt", quantity: 1, price: 3990 },
      { name: "Nike Air Max 270", quantity: 1, price: 3990 }
    ],
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    _id: "ORD-002-2024",
    userId: "user_2",
    email: "jane.smith@example.com",
    amount: 8990,
    status: "success",
    products: [
      { name: "Puma Ultra Warm Zip", quantity: 1, price: 8990 }
    ],
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    _id: "ORD-003-2024",
    userId: "user_3",
    email: "michael.j@example.com",
    amount: 19980,
    status: "failed",
    products: [
      { name: "Under Armour StormFleece", quantity: 1, price: 9990 },
      { name: "Herschel Backpack", quantity: 1, price: 9990 }
    ],
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    _id: "ORD-004-2024",
    userId: "user_4",
    email: "sarah.wilson@example.com",
    amount: 6990,
    status: "success",
    products: [
      { name: "Nike Air Essentials Pullover", quantity: 1, price: 6990 }
    ],
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
  },
  {
    _id: "ORD-005-2024",
    userId: "user_5",
    email: "david.brown@example.com",
    amount: 2990,
    status: "success",
    products: [
      { name: "Nike Dri Flex T-Shirt", quantity: 1, price: 2990 }
    ],
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
  },
  {
    _id: "ORD-006-2024",
    userId: "user_6",
    email: "emma.davis@example.com",
    amount: 12990,
    status: "success",
    products: [
      { name: "Adidas CoreFit T-Shirt", quantity: 2, price: 3990 },
      { name: "Nike Dri Flex T-Shirt", quantity: 1, price: 2990 }
    ],
    createdAt: new Date("2024-03-12"),
    updatedAt: new Date("2024-03-12"),
  },
  {
    _id: "ORD-007-2024",
    userId: "user_7",
    email: "james.miller@example.com",
    amount: 15980,
    status: "failed",
    products: [
      { name: "Under Armour StormFleece", quantity: 1, price: 9990 },
      { name: "Nike Air Essentials Pullover", quantity: 1, price: 6990 }
    ],
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
  },
  {
    _id: "ORD-008-2024",
    userId: "user_8",
    email: "olivia.moore@example.com",
    amount: 8990,
    status: "success",
    products: [
      { name: "Puma Ultra Warm Zip", quantity: 1, price: 8990 }
    ],
    createdAt: new Date("2024-03-18"),
    updatedAt: new Date("2024-03-18"),
  },
  {
    _id: "ORD-009-2024",
    userId: "user_9",
    email: "william.taylor@example.com",
    amount: 11970,
    status: "success",
    products: [
      { name: "Adidas CoreFit T-Shirt", quantity: 3, price: 3990 }
    ],
    createdAt: new Date("2024-03-20"),
    updatedAt: new Date("2024-03-20"),
  },
  {
    _id: "ORD-010-2024",
    userId: "user_10",
    email: "sophia.anderson@example.com",
    amount: 5980,
    status: "failed",
    products: [
      { name: "Nike Dri Flex T-Shirt", quantity: 2, price: 2990 }
    ],
    createdAt: new Date("2024-03-22"),
    updatedAt: new Date("2024-03-22"),
  },
  {
    _id: "ORD-011-2024",
    userId: "user_1",
    email: "john.doe@example.com",
    amount: 16980,
    status: "success",
    products: [
      { name: "Under Armour StormFleece", quantity: 1, price: 9990 },
      { name: "Nike Air Essentials Pullover", quantity: 1, price: 6990 }
    ],
    createdAt: new Date("2024-03-25"),
    updatedAt: new Date("2024-03-25"),
  },
  {
    _id: "ORD-012-2024",
    userId: "user_2",
    email: "jane.smith@example.com",
    amount: 3990,
    status: "success",
    products: [
      { name: "Adidas CoreFit T-Shirt", quantity: 1, price: 3990 }
    ],
    createdAt: new Date("2024-03-28"),
    updatedAt: new Date("2024-03-28"),
  },
]
