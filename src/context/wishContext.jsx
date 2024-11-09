import { createContext, useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../components/Local Storage/localStorage";
const WishContext = createContext();
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export const WishProvider = ({ children }) => {
  // wish section
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
        toast.error(`${item["product_title"]} is already in the Wishlist`);
      }
    });
    if (!found) {
      setWish((prevCart) => [...prevCart, item]);
      toast(`${item["product_title"]} is added to the Wishlist`);
    }
  };
  function removeFromWish(item) {
    const { product_id } = item;

    const newList = wish.filter((p) => {
      return p["product_id"] != product_id;
    });
    setWish(newList);
    localStorage.setItem("wish", JSON.stringify(newList));
  }
  const clearWish = () => {
    setWish([]);
  };

  return (
    <WishContext.Provider
      value={{
        wish,
        addToWish,
        removeFromWish,
        clearWish,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export default WishContext;
