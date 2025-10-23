import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Lock } from "lucide-react";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignInFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<SignInFormData> = {};

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      // TODO: Implement actual authentication logic here
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to home after successful login
        navigate("/");
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof SignInFormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form Card */}
        <div className="shadow-lg border border-gray-100 p-8 rounded-lg">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-3 rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <>
                  Sign In
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
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Link
            to="/signup"
            className="block w-full text-center ring-1 ring-gray-400 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
