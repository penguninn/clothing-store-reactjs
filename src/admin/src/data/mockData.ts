import { ProductType, OrderType, UserType, OrderChartType, CategoryType } from '../types';

// Products Mock Data
export const mockProducts: ProductType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Premium cotton t-shirt with CoreFit technology",
    description: "Experience unparalleled comfort with our Adidas CoreFit T-Shirt. Made from premium breathable cotton.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    categorySlug: "t-shirts",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Insulated jacket with premium zip closure",
    description: "Stay warm with the Puma Ultra Warm Zip jacket.",
    price: 89.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png"
    },
    categorySlug: "jackets",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Soft fleece pullover with Nike Air branding",
    description: "Classic Nike Air Essentials Pullover.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    categorySlug: "jackets",
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription: "Lightweight performance tee with Dri-FIT",
    description: "Nike Dri Flex T-Shirt for performance.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: {
      white: "/products/4w.png",
      pink: "/products/4p.png"
    },
    categorySlug: "t-shirts",
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription: "Weather-resistant fleece with UA Storm",
    description: "Under Armour StormFleece jacket.",
    price: 99.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
    categorySlug: "jackets",
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
  },
];

// Orders Mock Data
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
];

// Users Mock Data
export const mockUsers: UserType[] = [
  {
    id: "user_1",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    role: "user",
    createdAt: new Date("2024-01-01"),
    status: "active",
  },
  {
    id: "user_2",
    email: "jane.smith@example.com",
    firstName: "Jane",
    lastName: "Smith",
    role: "user",
    createdAt: new Date("2024-01-05"),
    status: "active",
  },
  {
    id: "user_3",
    email: "michael.j@example.com",
    firstName: "Michael",
    lastName: "Johnson",
    role: "user",
    createdAt: new Date("2024-01-10"),
    status: "active",
  },
  {
    id: "admin_1",
    email: "admin@trendlama.com",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    createdAt: new Date("2023-12-01"),
    status: "active",
  },
];

// Chart Data Mock
export const mockOrderChartData: OrderChartType[] = [
  { month: "January", total: 186, successful: 150 },
  { month: "February", total: 305, successful: 250 },
  { month: "March", total: 237, successful: 200 },
  { month: "April", total: 173, successful: 140 },
  { month: "May", total: 209, successful: 180 },
  { month: "June", total: 214, successful: 190 },
];

// Categories Mock Data
export const mockCategories: CategoryType[] = [
  { id: 1, name: "T-Shirts", slug: "t-shirts" },
  { id: 2, name: "Jackets", slug: "jackets" },
  { id: 3, name: "Shoes", slug: "shoes" },
  { id: 4, name: "Accessories", slug: "accessories" },
  { id: 5, name: "Bags", slug: "bags" },
];
