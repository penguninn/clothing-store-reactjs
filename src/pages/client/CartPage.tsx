import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, Trash2 } from "lucide-react";
import ShippingForm from "@common/ShippingForm";
import type { ShippingFormInputs, CartItemType } from "@types";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

// TODO: Replace with actual cart state management
const mockCartItems: CartItemType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Premium cotton t-shirt with CoreFit technology for ultimate comfort.",
    description: "Experience unparalleled comfort with our Adidas CoreFit T-Shirt.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    categorySlug: "t-shirts",
    createdAt: new Date(),
    updatedAt: new Date(),
    quantity: 2,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Soft fleece pullover with iconic Nike Air branding and comfort fit.",
    description: "The Nike Air Essentials Pullover combines classic style with modern comfort.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    categorySlug: "jackets",
    createdAt: new Date(),
    updatedAt: new Date(),
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const CartPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const [cart, setCart] = useState<CartItemType[]>(mockCartItems);

  const activeStep = parseInt(searchParams.get("step") || "1");

  const removeFromCart = (item: CartItemType) => {
    setCart((prev) =>
      prev.filter(
        (p) =>
          !(
            p.id === item.id &&
            p.selectedSize === item.selectedSize &&
            p.selectedColor === item.selectedColor
          )
      )
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 10;
  const shippingFee = 10;
  const total = subtotal - discount + shippingFee;

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.length > 0 ? (
              cart.map((item) => (
                // SINGLE CART ITEM
                <div
                  className="flex items-center justify-between"
                  key={item.id + item.selectedSize + item.selectedColor}
                >
                  {/* IMAGE AND DETAILS */}
                  <div className="flex gap-8">
                    {/* IMAGE */}
                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={item.images[item.selectedColor] || ""}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* ITEM DETAILS */}
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-xs text-gray-500">
                          Size: {item.selectedSize}
                        </p>
                        <p className="text-xs text-gray-500">
                          Color: {item.selectedColor}
                        </p>
                      </div>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item)}
                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Payment</h3>
              <p className="text-sm text-gray-500">
                Payment integration placeholder. In a real app, this would be Stripe/PayPal.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-xs text-gray-600">Shipping Details:</p>
                <p className="text-sm">{shippingForm.name}</p>
                <p className="text-sm">{shippingForm.email}</p>
                <p className="text-sm">{shippingForm.address}, {shippingForm.city}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Please fill in the shipping form to continue.
            </p>
          )}
        </div>
        {/* DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount (10%)</p>
              <p className="font-medium">$ {discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium">${shippingFee.toFixed(2)}</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">${total.toFixed(2)}</p>
            </div>
          </div>
          {activeStep === 1 && cart.length > 0 && (
            <button
              onClick={() => navigate("/cart?step=2")}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
