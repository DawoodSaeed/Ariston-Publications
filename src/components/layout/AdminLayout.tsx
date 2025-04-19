
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
