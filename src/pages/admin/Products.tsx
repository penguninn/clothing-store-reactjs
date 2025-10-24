import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { DataTable } from "@common/admin/tables/DataTable";
import { productColumns } from "@common/admin/tables/ProductColumns";
import { mockProducts } from "@constants/mock/products";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";
import AddProductDialog from "@common/admin/AddProductDialog";
import type { ProductType } from "@types";

const ProductsPage = () => {
  const [tableData, setTableData] = useState<ProductType[]>(mockProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const handleAddProduct = (newProduct: Omit<ProductType, "id" | "createdAt" | "updatedAt">) => {
    const product: ProductType = {
      ...newProduct,
      id: Math.max(...tableData.map((p) => p.id)) + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTableData([product, ...tableData]);
    setIsAddDialogOpen(false);
  };

  const handleEditProduct = (updatedProduct: ProductType) => {
    setTableData(tableData.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setTableData(tableData.filter((p) => p.id !== id));
    }
  };

  // Filtering & Search
  const filteredProducts = tableData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.categorySlug === categoryFilter;
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
