import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CONFIRM_ORDER,
} from "./cartActionTypes";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    const existingItem = state.items.find(
      (item) => item.id === action.payload.itemToAdd.id,
    );
    if (existingItem) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...action.payload.itemToAdd, quantity: 1 }],
      };
    }
  } else if (action.type === INCREASE_QUANTITY) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    };
  } else if (action.type === DECREASE_QUANTITY) {
    return {
      ...state,
      items: state.items
        .map((item) =>
          item.id === action.payload.itemId
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 0,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    };
  } else if (action.type === CONFIRM_ORDER) {
    return {
      ...state,
      items: [],
    };
  } else {
    return state;
  }
};

export { cartReducer };
