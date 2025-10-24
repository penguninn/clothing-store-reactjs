import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// TODO: Connect to cart state management
const ShoppingCartIcon = () => {
  // Temporary mock cart count
  const cartCount = 0;

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      {cartCount > 0 && (
        <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default ShoppingCartIcon;
