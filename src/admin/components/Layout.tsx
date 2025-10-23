import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import Navbar from "./Navbar";
import { SidebarProvider } from "./ui/sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <div className="px-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
