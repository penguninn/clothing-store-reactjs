import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="TrendLama" className="w-9 h-9" />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            TRENDLAMA.
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Trendlama.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link to="/">Homepage</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Terms of Service</Link>
        <Link to="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link to="/products">All Products</Link>
        <Link to="/products">New Arrivals</Link>
        <Link to="/products">Best Sellers</Link>
        <Link to="/products">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
