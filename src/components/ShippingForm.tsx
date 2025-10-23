import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type {ShippingFormInputs} from "@/types";

interface ShippingFormProps {
  setShippingForm: (data: ShippingFormInputs) => void;
}

const ShippingForm = ({ setShippingForm }: ShippingFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ShippingFormInputs>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [errors, setErrors] = useState<Partial<ShippingFormInputs>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ShippingFormInputs> = {};

    if (!formData.name || formData.name.length < 1) {
      newErrors.name = "Name is required!";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone || formData.phone.length < 7 || formData.phone.length > 10 || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be between 7 and 10 digits!";
    }

    if (!formData.address || formData.address.length < 1) {
      newErrors.address = "Address is required!";
    }

    if (!formData.city || formData.city.length < 1) {
      newErrors.city = "City is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShippingForm(formData);
      navigate("/cart?step=3");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof ShippingFormInputs]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="phone"
          placeholder="123456789"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="address"
          placeholder="123 Main St, Anytown"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="text"
          id="city"
          placeholder="New York"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
