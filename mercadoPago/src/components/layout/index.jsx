import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/index";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setTitle("Inicio");
        break;
      case "/money":
        setTitle("Tu Dinero");
        break;
      case "/profile":
        setTitle("Tus Datos");
        break;
      default:
        setTitle("");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      <Dashboard open={open} setOpen={setOpen} />
      <Navbar menu={() => setOpen(!open)} dato={title} />
      <div className="w-full h-screen">{children}</div>
    </div>
  );
};

export default Layout;
