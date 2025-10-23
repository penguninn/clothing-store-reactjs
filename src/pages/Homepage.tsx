import ProductList from "../components/ProductList";

const Homepage = () => {
  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <img
          src="/featured.png"
          alt="Featured Product"
          className="w-full h-full object-cover"
        />
      </div>
      <ProductList params="homepage" />
    </div>
  );
};

export default Homepage;
