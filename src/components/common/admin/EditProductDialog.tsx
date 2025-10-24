import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Upload, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@ui/dialog";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Textarea } from "@ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";
import type { ProductType } from "@types";

interface EditProductDialogProps {
  product: ProductType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEditProduct: (product: ProductType) => void;
}

type ProductFormValues = Pick<
  ProductType,
  "name" | "shortDescription" | "description" | "price"
>;

const EditProductDialog = ({ product, open, onOpenChange, onEditProduct }: EditProductDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: product.name,
      shortDescription: product.shortDescription,
      description: product.description,
      price: product.price,
    }
  });

  const [categorySlug, setCategorySlug] = useState<string>(product.categorySlug);
  const [imagePreview, setImagePreview] = useState<string>(product.images.gray || "");

  useEffect(() => {
    reset({
      name: product.name,
      shortDescription: product.shortDescription,
      description: product.description,
      price: product.price,
    });
    setCategorySlug(product.categorySlug);
    setImagePreview(product.images.gray || "");
  }, [product, reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProductFormValues) => {
    onEditProduct({
      ...product,
      name: data.name,
      shortDescription: data.shortDescription,
      description: data.description,
      price: Number(data.price),
      images: { gray: imagePreview },
      categorySlug,
      updatedAt: new Date(),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Update product information.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Product Image</Label>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted">
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 h-6 w-6"
                        onClick={() => setImagePreview("")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <Input type="file" accept="image/*" onChange={handleImageChange} className="flex-1" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  placeholder="Awesome T-Shirt"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="29.99"
                  {...register("price", { required: "Price is required", min: 0 })}
                />
                {errors.price && <p className="text-xs text-red-500">{errors.price.message}</p>}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input
                id="shortDescription"
                placeholder="Brief description..."
                {...register("shortDescription", { required: "Short description is required" })}
              />
              {errors.shortDescription && <p className="text-xs text-red-500">{errors.shortDescription.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Full Description</Label>
              <Textarea
                id="description"
                placeholder="Detailed product description..."
                {...register("description", { required: "Description is required" })}
              />
              {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
            </div>

            <div className="grid gap-2">
              <Label>Category</Label>
              <Select value={categorySlug} onValueChange={setCategorySlug}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t-shirts">T-Shirts</SelectItem>
                  <SelectItem value="jeans">Jeans</SelectItem>
                  <SelectItem value="jackets">Jackets</SelectItem>
                  <SelectItem value="shoes">Shoes</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
