import { createContext, useEffect, useState } from "react";
import {
  getFromLocalStorage,
  setLocalStorage,
} from "../components/Local Storage/localStorage";
const HistoryContext = createContext();
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export const HistoryProvider = ({ children }) => {
  // history section
  const [history, setHistory] = useState(() => {
    return getFromLocalStorage("history");
  });
  useEffect(() => {
    if (history.length > 0) {
      setLocalStorage("history", history[history.length - 1]);
    }
  }, [history]);
  const addToHistory = (items) => {
    items.map((item) => {
      const { product_id } = item;
      let found = false;
      history.map((p) => {
        if (p["product_id"] == product_id) {
          found = true;
        }
      });
      if (!found) {
        setHistory((prevCart) => [...prevCart, item]);
      }
    });
  };
  function removeFromHistory(item) {
    const { product_id } = item;
    const newList = history.filter((p) => {
      return p["product_id"] != product_id;
    });
    setHistory(newList);
    toast(`${item["product_title"]} is removed from History`);
    localStorage.setItem("history", JSON.stringify(newList));
  }
  const clearHistory = () => {
    setHistory([]);
    toast("The history is now cleaned");
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
