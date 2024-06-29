import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Error from "../Pages/Error";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart";
import ProtectedRoute from "./ProtectedRoutes";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category?" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/product-details/:ProductID"
          element={<ProductDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Routing;
