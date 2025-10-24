import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductInteraction from "@common/ProductInteraction";
import type { ProductType } from "@types";
import { mockProducts } from "@constants/mock/products";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // Find product by ID from mock data
    const foundProduct = mockProducts.find((p) => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-500">Product not found!</p>
      </div>
    );
  }

  const selectedSize = searchParams.get("size") || (product.sizes[0] as string);
  const selectedColor = searchParams.get("color") || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <img
          src={product.images[selectedColor] || ""}
          alt={product.name}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <img
            src="/klarna.png"
            alt="klarna"
            className="w-[50px] h-[25px] rounded-md"
          />
          <img
            src="/cards.png"
            alt="cards"
            className="w-[50px] h-[25px] rounded-md"
          />
          <img
            src="/stripe.png"
            alt="stripe"
            className="w-[50px] h-[25px] rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black cursor-pointer">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black cursor-pointer">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black cursor-pointer">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
