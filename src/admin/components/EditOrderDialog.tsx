import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { OrderType } from "../types";

interface EditOrderDialogProps {
  order: OrderType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEditOrder: (order: OrderType) => void;
}

type OrderFormData = {
  userId: string;
  email: string;
  status: "success" | "failed";
  products: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

const EditOrderDialog = ({ order, open, onOpenChange, onEditOrder }: EditOrderDialogProps) => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<OrderFormData>({
    defaultValues: {
      userId: order.userId,
      email: order.email,
      status: order.status,
      products: order.products,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const [status, setStatus] = useState<"success" | "failed">(order.status);

  useEffect(() => {
    reset({
      userId: order.userId,
      email: order.email,
      status: order.status,
      products: order.products,
    });
    setStatus(order.status);
  }, [order, reset]);

  const onSubmit = (data: OrderFormData) => {
    const totalAmount = data.products.reduce(
      (sum, product) => sum + product.price * product.quantity * 100,
      0
    );

    onEditOrder({
      ...order,
      userId: data.userId,
      email: data.email,
      amount: totalAmount,
      status,
      products: data.products,
      updatedAt: new Date(),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Order</DialogTitle>
          <DialogDescription>Update order information.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="userId">User ID</Label>
              <Input
                id="userId"
                placeholder="user_123"
                {...register("userId", { required: "User ID is required" })}
              />
              {errors.userId && (
                <p className="text-xs text-red-500">{errors.userId.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="customer@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={(value: "success" | "failed") => setStatus(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label>Products</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append({ name: "", quantity: 1, price: 0 })}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Product
                </Button>
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-[1fr,80px,100px,40px] gap-2 items-start">
                  <div className="grid gap-1">
                    <Input
                      placeholder="Product name"
                      {...register(`products.${index}.name`, {
                        required: "Product name is required",
                      })}
                    />
                    {errors.products?.[index]?.name && (
                      <p className="text-xs text-red-500">
                        {errors.products[index]?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-1">
                    <Input
                      type="number"
                      min="1"
                      placeholder="Qty"
                      {...register(`products.${index}.quantity`, {
                        required: true,
                        valueAsNumber: true,
                        min: 1,
                      })}
                    />
                  </div>
                  <div className="grid gap-1">
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="Price"
                      {...register(`products.${index}.price`, {
                        required: true,
                        valueAsNumber: true,
                        min: 0,
                      })}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
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

export default EditOrderDialog;
