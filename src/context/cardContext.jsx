import { createContext, useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../components/Local Storage/localStorage";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
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
      setPrice(newp);
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
      }
    });
    if (!found) {
      setCart((prevCart) => [...prevCart, item]);
    }
  };
  function removeFromCart(item) {
    const { product_id } = item;
    const newList = cart.filter((p) => {
      return p["product_id"] != product_id;
    });
    setCart(newList);
    localStorage.setItem("cart", JSON.stringify(newList));
  }
  function sortCart() {
    setCart((prevCart) => [...prevCart].sort((a, b) => b.price - a.price));
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
