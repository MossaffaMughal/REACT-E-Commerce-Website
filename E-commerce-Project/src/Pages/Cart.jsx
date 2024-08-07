import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  confirmOrder,
} from "../redux/cart/cartActions";
import "./Cart.css";
import { useState } from "react";

const Cart = () => {
  const { items } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    dispatch(confirmOrder());
    setOrderConfirmed(true);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading text-white">My Cart</h1>
      {orderConfirmed ? (
        <p className="cart-message">
          Order confirmed! <br /> Thank you for your order!
        </p>
      ) : (
        <>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <p className="cart-item-text">
                  <span className="font-bold">Product Name: </span>
                  {item.title}
                </p>

                <p className="cart-item-text">
                  <span className="font-bold">Price: </span>${item.price}
                </p>
                <p className="cart-item-text">
                  <span className="font-bold">Quantity: </span>
                  {item.quantity}
                  <button
                    className="quantity-btn m-5"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <button
                    className="quantity-btn m-5"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </p>
              </div>
            ))
          ) : (
            <p className="cart-message">Oops! Your cart is empty...</p>
          )}
          <NavLink className="add-btn m-5" to={"/products"}>
            Add Products
          </NavLink>
          {items.length > 0 ? (
            <button
              className="confirm-order-btn m-5"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          ) : (
            <button></button>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
