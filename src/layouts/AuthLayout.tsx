import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-blue-200 flex items-center justify-center h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
