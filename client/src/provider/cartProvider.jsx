import React, { useReducer, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useIsMounted } from "../component/isMounted";
import UserContext from "./userProvider";
import { generateRan } from "../component/data/genRandonNum";
const CartContext = React.createContext(null);

const CartReducer = (cartState, action) => {
  // const { state, USER } = useContext(UserContext);
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

    case "update-cart": {
      return {
        cart: action.payload,
      };
    }
    case "remove-cart": {
      const item = action.payload;
      const existItem = cartState.cart.find((x) => x._id === item);
      const lastItem = cartState.cart.length === 1;
      if (existItem.qty > 1) {
        return {
          ...cartState,
          cart: cartState?.cart?.map((x) =>
            x._id === item ? { ...existItem, qty: existItem.qty - 1 } : x
          ),
        };
      } else if (lastItem) {
        localStorage.removeItem("cartItems");
        return {
          cart: [],
        };
      } else {
        return {
          ...cartState,
          cart: cartState.cart.filter((x) => x._id !== action.payload),
        };
      }
    }
    case "delete-item": {
      //delete the item from the cart
      const item = action.payload;
      const lastItem = cartState.cart.length === 1;
      if (lastItem) {
        localStorage.removeItem("cartItems");
        return {
          cart: [],
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
  }
};

export const CartProvider = (props) => {
  const [getData, setGetData] = useState({});
  const [userid, setUserId] = useState();
  const [totdayDate, setTodayDate] = useState();

  const isMounted = useIsMounted;

  function getTodayDate() {
    let today = new Date();

    let dates =
      today.getDate() +
      "/" +
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getFullYear();

    // console.log({ dates: dates });
    setTodayDate(dates);
  }
  const [cartState, dispatch] = useReducer(CartReducer, {
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
    updateCart();
  }, []);

  useEffect(() => {
    getTodayDate();
    if (cartState.cart.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartState.cart));
    }
    if (localStorage.getItem("userID")) {
      setUserId(localStorage.getItem("userID"));
    }
    // updateCart();
  }, [cartState.cart]);

  async function AddToCart(id, userId) {
    const uniqueNum = generateRan();
    const { data } = await axios.get(`/api/auth/product?productId=${id}`);
    if (isMounted.current) {
      setGetData(data);
    }

    await axios.get(`/api/auth/get-user?userID=${userId}`).then((res) => [
      dispatch({
        type: "add-cart",
        payload: {
          _id: data._id,
          productName: data.productName,
          productPrice: data.productPrice,
          proFrontIMAGE: data.proFrontIMAGE[0].URL,
          sellerId: data.owner,
          customerName: res.data.user?.fullName,
          customerAddress: res.data.user?.streetAddress,
          customerState: res.data.user?.countryState,
          customerCountry: res.data.user?.country,
          orderNum: data?._id.slice(19, 24) + uniqueNum,
          customerId: res.data.user?._id,
          dateCreated: totdayDate,
        },
      }),
    ]);
  }

  async function updateCartData(val) {
    await dispatch({
      type: "add-cart",
      payload: val,
    });
  }

  async function recoverCart() {
    // if (localStorage.getItem("cart")) {
    //   const cart = await JSON.parse(localStorage.getItem("cart"));
    //   // dispatch({ type: "add-cart", payload: cart });
    //   // AddToCart(cart);
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
  async function removeCartItem(id) {
    await dispatch({ type: "delete-item", payload: id });
  }

  const actions = {
    AddToCart,
    recoverCart,
    removeFromCart,
    saveSubTotal,
    saveTotalPrice,
    removeCartItem,
    updateCartData,
  };

  return (
    <CartContext.Provider value={{ cartState, CART: actions }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
