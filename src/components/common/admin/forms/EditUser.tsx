import { useForm } from "react-hook-form";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@ui/sheet";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";

interface EditUserProps {
  defaultValues: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
}

type UserFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
};

const EditUser = ({ defaultValues }: EditUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues,
  });

  const onSubmit = (data: UserFormData) => {
    console.log("Updated user data:", data);
    // Add your update logic here
  };

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>
          Make changes to the user profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
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
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="+1 234 567 8900"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="123 Main St"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-xs text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="New York"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-xs text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>

        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </form>
    </SheetContent>
  );
};

export default EditUser;
