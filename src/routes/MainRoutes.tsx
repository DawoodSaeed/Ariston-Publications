import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Books from "@/pages/Books";
import Journals from "@/pages/Journals";
import About from "@/pages/About";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import NotFound from "@/pages/NotFound";
import AdminLayout from "@/components/layout/AdminLayout";
import UserLayout from "@/components/layout/UserLayout";
import AdminDashboard from "@/pages/admin/Dashboard";
import UserDashboard from "@/pages/user/Dashboard";
import Login from "@/pages/Login";
import RegisterUser from "@/pages/RegisterUser";

interface ProtectedRouteProps {
  allowedRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRole }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) return <Navigate to="/login" replace />;

  if (user.role !== allowedRole) return <Navigate to="/" replace />;

  return <Outlet />;
};

const MainRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
      </Route>

      {/* Protected Admin routes */}
      <Route element={<ProtectedRoute allowedRole="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="books" element={<AdminDashboard />} />
          <Route path="users" element={<AdminDashboard />} />
        </Route>
      </Route>

      {/* Protected Author routes */}
      <Route element={<ProtectedRoute allowedRole="author" />}>
        <Route path="/author" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="submissions" element={<UserDashboard />} />
          <Route path="profile" element={<UserDashboard />} />
        </Route>
      </Route>

      {/* Protected Reviewer routes */}
      <Route element={<ProtectedRoute allowedRole="reviewer" />}>
        <Route path="/reviewer" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="reviews" element={<UserDashboard />} />
          <Route path="profile" element={<UserDashboard />} />
        </Route>
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
