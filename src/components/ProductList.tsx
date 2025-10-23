import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type {ProductType} from "@/types";
import { mockProducts } from "../data/mockData";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

interface ProductListProps {
  params: "homepage" | "products";
}

const ProductList = ({ params }: ProductListProps) => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductType[]>([]);

  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "newest";
  const search = searchParams.get("search");

  useEffect(() => {
    // Filter and sort products
    let filteredProducts = [...mockProducts];

    // Filter by category
    if (category && category !== "all") {
      filteredProducts = filteredProducts.filter(
        (p) => p.categorySlug === category
      );
    }

    // Filter by search
    if (search) {
      filteredProducts = filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort products
    switch (sort) {
      case "newest":
        filteredProducts.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
        break;
      case "oldest":
        filteredProducts.sort(
          (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
        );
        break;
      case "asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }

    // Limit for homepage
    if (params === "homepage") {
      filteredProducts = filteredProducts.slice(0, 8);
    }

    setProducts(filteredProducts);
  }, [category, sort, search, params]);

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {params === "homepage" && (
        <Link
          to={category ? `/products/?category=${category}` : "/products"}
          className="flex justify-end mt-4 underline text-sm text-gray-500"
        >
          View all products
        </Link>
      )}
    </div>
  );
};

export default ProductList;
