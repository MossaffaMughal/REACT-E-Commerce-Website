import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CONFIRM_ORDER,
} from "./cartActionTypes";

const addToCart = (itemToAdd) => {
  return {
    type: ADD_TO_CART,
    payload: {
      itemToAdd: itemToAdd,
    },
  };
};

const increaseQuantity = (itemId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      itemId: itemId,
    },
  };
};

const decreaseQuantity = (itemId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: {
      itemId: itemId,
    },
  };
};

const confirmOrder = () => {
  return {
    type: CONFIRM_ORDER,
  };
};

export { addToCart, increaseQuantity, decreaseQuantity, confirmOrder };
