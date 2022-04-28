import React, { useReducer, useContext, useEffect, useState } from "react";
import axios from "axios";
const CartContext = React.createContext(null);

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "add-cart": {
      const item = action.payload;
      const existItem = cartState.cart.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...cartState,
          cart: [...cartState.cart, { ...existItem, qty: existItem.qty + 1 }],
        };
      } else
        return {
          ...cartState,
          cart: [...cartState.cart, { ...item, qty: 1 }],
        };
    }
    case "remove-item": {
      const item = action.payload;
      return {
        ...cartState,
        cart: cartState.cart.filter((x) => x !== item),
      };
    }
  }
};

export const CartProvider = (props) => {
  const [productImg, setProductImg] = useState([]);
  const [productImage, setProductImage] = useState();
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  async function addToCart(id) {
    const { data } = await axios.get(`/api/auth/product?productId=${id}`);
    setProductImg(data.proFrontIMAGE);
    productImg.map((x) => {
      return setProductImage(x.URL);
    });
    dispatch({
      type: "add-cart",
      payload: {
        _id: data._id,
        productName: data.productName,
        productPrice: data.productPrice,
        proFrontIMAGE: data.proFrontIMAGE[0].URL,
        qty: 0,
      },
    });

    // localStorage.setItem("cart", JSON.stringify(id));
  }

  async function recoverCart() {
    if (localStorage.getItem("cart")) {
      const cart = await JSON.parse(localStorage.getItem("cart"));
      // dispatch({ type: "add-cart", payload: cart });
      // addToCart(cart);
      // console.log(cart);
    }
  }

  function removeFromCart(id) {
    dispatch({ type: "remove-cart", payload: id });
  }

  const actions = {
    addToCart,
    recoverCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={{ cartState, CART: actions }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
