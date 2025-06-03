import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [order, setOrder] = useState([]);

  console.log(order, "ordersss");
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!order || order.length === 0) {
      const setOrderFromLocal = JSON.parse(localStorage.getItem("orders"));
      if (setOrderFromLocal) {
        setOrder(setOrderFromLocal);
      }
    }
  }, [order]);

  const addToCart = (data) => {
    console.log(data, "data");
    console.log(data?.productData?._id, "id");
    const hasItem =
      order &&
      order?.length &&
      order.some((item) => item?.productData?._id === data?.productData?._id);

    if (hasItem) {
      return toast.error("Product is already in your cart!!!");
    }
    if (!data?.size) {
      return toast.error("please Select The size of Your product!!!");
    } else {
      setOrder((prev) => [...prev, data]);
      localStorage.setItem("orders", JSON.stringify([...order, data]));
    }
  };

  // const addToCart = async (itemId, size) => {
  //   if (!size) {
  //     toast.error("Select Product Size");
  //     return;
  //   }
  //   let cartData = structuredClone(cartItems);
  //   if (cartData[itemId]) {
  //     if (cartData[itemId][size]) {
  //       cartData[itemId][size] += 1;
  //     } else {
  //       cartData[itemId][size] = 1;
  //     }
  //   } else {
  //     cartData[itemId] = {};
  //     cartData[itemId][size] = 1;
  //   }
  //   setCartItems(cartData);
  // };

  useEffect(() => {}, [cartItems]);

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalCount += cartItems[itemId][size];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          return error;
        }
      }
    }
    return totalAmount;
  };

  const value = {
    order,
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
