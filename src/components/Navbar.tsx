import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="TrendLama"
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          TRENDLAMA.
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link to="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        {/* TODO: Add authentication UI here */}
        <button className="text-sm text-gray-600 hover:text-gray-800">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
