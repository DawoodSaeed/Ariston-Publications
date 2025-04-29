const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div>
      <h2 className="text-xl mb-2 capitalize">{user.role} Dashboard</h2>
      <p className="text-gray-600">Welcome, {user.email}</p>
    </div>
  );
};

export default UserDashboard;
