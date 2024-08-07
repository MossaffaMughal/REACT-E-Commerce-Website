import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../../contexts/loginContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("LOCATION: ", location);
  }, [location]);

  const { loginDetails, setLoginDetails } = useContext(LoginContext);
  const isLoggedIn = loginDetails.length > 0;

  const getActiveClass = (isActive) =>
    isActive ? "text-white" : "text-gray-300";

  return (
    <div className="flex w-full items-center justify-between bg-[#243049] p-4 text-white">
      <div>
        <h1
          className="p-1 text-3xl font-bold text-gray-300 hover:cursor-pointer hover:text-white"
          onClick={() => {
            navigate("/");
          }}
        >
          My Store
        </h1>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            `p-4 text-lg font-bold hover:cursor-pointer hover:text-white ${getActiveClass(isActive)}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-4 text-lg font-bold hover:cursor-pointer hover:text-white ${getActiveClass(isActive)}`
          }
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-4 text-lg font-bold hover:cursor-pointer hover:text-white ${getActiveClass(isActive)}`
          }
          to={"/categories"}
        >
          Categories
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-4 text-lg font-bold hover:cursor-pointer hover:text-white ${getActiveClass(isActive)}`
          }
          to={"/profile"}
        >
          Profile
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className="p-1 text-lg font-bold text-gray-300 hover:cursor-pointer hover:text-white"
            onClick={() => {
              setLoginDetails([]);
            }}
            to={"/"}
          >
            Sign out
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            `p-4 text-lg font-bold hover:cursor-pointer hover:text-white ${getActiveClass(isActive)}`
          }
          to={"/cart"}
        >
          My Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
