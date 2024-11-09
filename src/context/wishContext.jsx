import { createContext, useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../components/Local Storage/localStorage";

const WishContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishProvider = ({ children }) => {
  const [wish, setWish] = useState(() => {
    return getFromLocalStorage("wish");
  });

  useEffect(() => {
    if (wish.length > 0) {
      setLocalStorage("wish", wish[wish.length - 1]);
    }
  }, [wish]);
  const addToWish = (item) => {
    const { product_id } = item;
    let found = false;
    wish.map((p) => {
      if (p["product_id"] == product_id) {
        found = true;
      }
    });
    if (!found) {
      setWish((prevCart) => [...prevCart, item]);
    }
  };
  function removeFromWish(item) {
    const { product_id } = item;
    const newList = wish.filter((p) => {
      return p["product_id"] != product_id;
    });
    setWish(newList);
    localStorage.setItem("cart", JSON.stringify(newList));
  }
  const clearWish = () => {
    setWish([]);
  };

  return (
    <WishContext.Provider
      value={{ wish, addToWish, removeFromWish, clearWish }}
    >
      {children}
    </WishContext.Provider>
  );
};

export default WishContext;
