import { Outlet } from "react-router-dom";
import Navbar from "@common/Navbar";
import Footer from "@common/Footer";

const ClientLayout = () => {
  return (
    <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
