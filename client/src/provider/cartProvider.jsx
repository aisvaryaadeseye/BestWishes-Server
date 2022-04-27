import React, { useReducer, useContext } from "react";

const CartContext = React.createContext(null);

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "add-cart": {
      const item = action.payload;
      const existItem = cartState.cart.find((x) => x === item);

      if (existItem) {
        return { ...cartState, cart: [...cartState.cart] };
      } else
        return {
          ...cartState,
          cart: [...cartState.cart, action.payload],
        };
    }
  }
};

export const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  function addToCart(val) {
    dispatch({
      type: "add-cart",
      payload: val,
    });
  }

  function recoverCart() {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      dispatch({ type: "add-cart", payload: cart });
    }
  }

  const actions = {
    addToCart,
    recoverCart,
  };

  return (
    <CartContext.Provider value={{ cartState, CART: actions }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
