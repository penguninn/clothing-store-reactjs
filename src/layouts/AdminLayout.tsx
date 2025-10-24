import { Outlet } from "react-router-dom";
import AppSidebar from "@common/admin/AppSidebar";
import Navbar from "@common/admin/Navbar";
import { SidebarProvider } from "@ui/sidebar";

const AdminLayout = () => {
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

export default AdminLayout;
