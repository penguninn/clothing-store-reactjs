import { useEffect, useState } from "react";
import { DataTable } from "../components/tables/DataTable";
import { productColumns } from "../components/tables/ProductColumns";
import { mockProducts } from "../data/mockData";
import { ProductType } from "../types";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>
      <DataTable columns={productColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
