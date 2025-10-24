import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Lock, User } from "lucide-react";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<SignUpFormData> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      // TODO: Implement actual registration logic here
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to signin after successful registration
        navigate("/signin");
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof SignUpFormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h1>
          <p className="text-sm text-gray-500">
            Sign up to start shopping with us
          </p>
        </div>

        {/* Form Card */}
        <div className="shadow-lg border border-gray-100 p-8 rounded-lg">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs text-gray-500 font-medium"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-0 top-2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border-b border-gray-200 py-2 pl-6 outline-none text-sm focus:border-gray-800 transition-colors"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs text-gray-500 font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-0 top-2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border-b border-gray-200 py-2 pl-6 outline-none text-sm focus:border-gray-800 transition-colors"
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-xs text-gray-500 font-medium"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-0 top-2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border-b border-gray-200 py-2 pl-6 outline-none text-sm focus:border-gray-800 transition-colors"
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-xs text-gray-500 font-medium"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-0 top-2 w-4 h-4 text-gray-400" />
                <input
                  className="w-full border-b border-gray-200 py-2 pl-6 outline-none text-sm focus:border-gray-800 transition-colors"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-3 rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                "Creating account..."
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link
            to="/signin"
            className="block w-full text-center ring-1 ring-gray-400 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Sign in instead
          </Link>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By creating an account, you agree to our{" "}
          <Link to="/terms" className="text-gray-800 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-gray-800 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
