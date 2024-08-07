import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Error from "../Pages/Error";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart";
import LayoutOne from "../Layouts/LayoutOne";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "../Pages/Profile";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutOne>
              <Home />
            </LayoutOne>
          }
        />
        <Route
          path="/products/:category?"
          element={
            <LayoutOne>
              <Products />
            </LayoutOne>
          }
        />
        <Route
          path="/categories"
          element={
            <LayoutOne>
              <Categories />
            </LayoutOne>
          }
        />
        <Route
          path="/product-details/:ProductID"
          element={
            <LayoutOne>
              <ProductDetails />
            </LayoutOne>
          }
        />
        <Route
          path="/login"
          element={
            <LayoutOne>
              <Login />
            </LayoutOne>
          }
        />
        <Route
          path="/signup"
          element={
            <LayoutOne>
              <Signup />
            </LayoutOne>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/cart"
            element={
              <LayoutOne>
                <Cart />
              </LayoutOne>
            }
          />
          <Route
            path="/profile"
            element={
              <LayoutOne>
                <Profile />
              </LayoutOne>
            }
          />
          <Route
            path="/cart"
            element={
              <LayoutOne>
                <Cart />
              </LayoutOne>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Routing;
