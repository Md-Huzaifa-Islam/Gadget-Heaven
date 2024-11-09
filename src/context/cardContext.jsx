import { createContext, useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../components/Local Storage/localStorage";
import { toast } from "react-toastify";
const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  // cart section
  const [cart, setCart] = useState(() => {
    return getFromLocalStorage("cart");
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setLocalStorage("cart", cart[cart.length - 1]);
      let newp = 0;
      cart.forEach((device) => {
        newp += device.price;
      });
      setPrice(newp.toFixed(2));
    } else {
      setPrice(0);
    }
  }, [cart]);

  const addToCart = (item) => {
    const { product_id } = item;
    let found = false;
    cart.map((p) => {
      if (p["product_id"] == product_id) {
        found = true;
        toast.error(`${item["product_title"]} is already in the Cart`);
      }
    });
    if (!found) {
      setCart((prevCart) => [...prevCart, item]);
      toast(`${item["product_title"]} is added to the Cart`);
    }
  };
  function removeFromCart(item) {
    const { product_id } = item;
    toast(`${item["product_title"]} is removed from Cart`);
    const newList = cart.filter((p) => {
      return p["product_id"] != product_id;
    });
    setCart(newList);
    localStorage.setItem("cart", JSON.stringify(newList));
  }
  function sortCart() {
    if (price > 0) {
      setCart((prevCart) => [...prevCart].sort((a, b) => b.price - a.price));
      toast("The cart is sorted");
    } else {
      toast.error("There is no item to sort in Cart");
    }
  }
  const clearCart = () => {
    setCart([]);
  };
  function totalCost() {
    let price = 0;
    cart.forEach((device) => {
      price += device.price;
    });
    return price;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        sortCart,
        totalCost,
        price,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
