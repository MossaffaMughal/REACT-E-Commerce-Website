import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("LOCATION: ", location);
  }, [location]);

  return (
    <div className="flex w-full items-center justify-between bg-[#243049] p-4 text-white">
      <div>
        <h1
          className="p-2 text-lg text-gray-300 hover:cursor-pointer hover:text-white"
          onClick={() => {
            navigate("/");
          }}
        >
          My Store
        </h1>
      </div>
      <div>
        <NavLink
          className="p-4 text-lg text-gray-300 hover:cursor-pointer hover:text-white"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="p-4 text-lg text-gray-300 hover:cursor-pointer hover:text-white"
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          className="p-4 text-lg text-gray-300 hover:cursor-pointer hover:text-white"
          to={"/categories"}
        >
          Categories
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
