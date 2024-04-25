import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
