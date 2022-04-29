import React, { useReducer, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useIsMounted } from "../component/isMounted";
const CartContext = React.createContext(null);

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "add-cart": {
      const item = action.payload;
      const existItem = cartState?.cart?.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...cartState,
          cart: cartState?.cart?.map((x) =>
            x._id === item._id ? { ...existItem, qty: existItem.qty + 1 } : x
          ),
        };
      } else
        return {
          ...cartState,
          cart: [...cartState.cart, { ...item, qty: 1 }],
        };
    }
    case "remove-cart": {
      const item = action.payload;
      const existItem = cartState.cart.find((x) => x._id === item);
      if (existItem.qty > 1) {
        return {
          ...cartState,
          cart: cartState?.cart?.map((x) =>
            x._id === item ? { ...existItem, qty: existItem.qty - 1 } : x
          ),
        };
      } else {
        return {
          ...cartState,
          cart: cartState.cart.filter((x) => x._id !== action.payload),
        };
      }
    }
    case "save-total-price": {
      return {
        ...cartState,
        totalPrice: action.payload,
      };
    }
    case "save-sub-total": {
      return {
        ...cartState,
        subTotal: action.payload,
      };
    }
    case "update-cart": {
      return {
        ...cartState,
        cart: action.payload,
      };
    }
  }
};

export const CartProvider = (props) => {
  const [getData, setGetData] = useState({});

  const isMounted = useIsMounted;
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalPrice: "",
    subTotal: "",
  });

  async function updateCart() {
    if (localStorage.getItem("cartItems")) {
      const cart = JSON.parse(localStorage.getItem("cartItems"));
      // console.log({ cart: cart });
      await dispatch({ type: "update-cart", payload: cart });
    }
  }

  useEffect(() => {
    if (cartState.cart.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartState.cart));
    }
    // updateCart();
  }, [cartState.cart]);

  async function addToCart(id) {
    const { data } = await axios.get(`/api/auth/product?productId=${id}`);
    if (isMounted.current) {
      setGetData(data);
    }

    await dispatch({
      type: "add-cart",
      payload: {
        _id: data._id,
        productName: data.productName,
        productPrice: data.productPrice,
        proFrontIMAGE: data.proFrontIMAGE[0].URL,
        // qty: 0,
      },
    });
  }

  async function recoverCart() {
    // if (localStorage.getItem("cart")) {
    //   const cart = await JSON.parse(localStorage.getItem("cart"));
    //   // dispatch({ type: "add-cart", payload: cart });
    //   // addToCart(cart);
    //   // console.log(cart);
    // }
  }
  async function saveTotalPrice(val) {
    await dispatch({ type: "save-total-price", payload: val });
  }
  async function saveSubTotal(val) {
    localStorage.setItem("sub-total", val);
    await dispatch({ type: "save-sub-total", payload: val });
  }
  async function removeFromCart(id) {
    await dispatch({ type: "remove-cart", payload: id });
  }

  const actions = {
    addToCart,
    recoverCart,
    removeFromCart,
    saveSubTotal,
    saveTotalPrice,
  };

  return (
    <CartContext.Provider value={{ cartState, CART: actions }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
