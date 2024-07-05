import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("LOCATION: ", location);
  }, [location]);

  return (
    <div className="w-full flex bg-[#243049] p-4 items-center justify-between text-white">
      <div>
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          My Store
        </h1>
      </div>
      <div className="flex gap-4">
        <NavLink className="text-lg text-gray-300 hover:text-white" to={"/"}>
          Home
        </NavLink>
        <NavLink
          className="text-lg text-gray-300 hover:text-white"
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          className="text-lg text-gray-300 hover:text-white"
          to={"/categories"}
        >
          Categories
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
