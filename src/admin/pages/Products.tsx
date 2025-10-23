import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { DataTable } from "../components/tables/DataTable";
import { productColumns } from "../components/tables/ProductColumns";
import { mockProducts } from "../data/mockData";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import AddProductDialog from "../components/AddProductDialog";
import type { ProductType } from "../types";

const ProductsPage = () => {
  const [productsData, setProductsData] = useState<ProductType[]>(mockProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const handleAddProduct = (newProduct: Omit<ProductType, "id">) => {
    const product: ProductType = {
      ...newProduct,
      id: Math.max(...productsData.map((p) => p.id)) + 1,
    };
    setProductsData([product, ...productsData]);
    setIsAddDialogOpen(false);
  };

  const handleEditProduct = (updatedProduct: ProductType) => {
    setProductsData(productsData.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProductsData(productsData.filter((p) => p.id !== id));
    }
  };

  // Filtering & Search
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">
            Manage your product inventory
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="t-shirts">T-Shirts</SelectItem>
            <SelectItem value="jeans">Jeans</SelectItem>
            <SelectItem value="jackets">Jackets</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={productColumns(handleEditProduct, handleDeleteProduct)}
        data={filteredProducts}
      />

      <AddProductDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default ProductsPage;
