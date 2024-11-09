import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartProvider } from "../../Context/Cardcontext";
import { WishProvider } from "../../context/wishContext";
import { HistoryProvider } from "../../context/purchasecontext";

const Root = () => {
  const demolocation = useLocation();
  let location = demolocation.pathname;
  location = location.slice(1);
  let dynamicTitle = "Gadgets";
  if (location != "") {
    dynamicTitle = location.charAt(0).toUpperCase() + location.slice(1);
  }
  document.title = `${dynamicTitle} | Gadget Heaven`;
  return (
    <CartProvider>
      <WishProvider>
        <HistoryProvider>
          <div className="flex min-h-screen flex-col justify-between bg-background-0 font-sora">
            <div className="">
              <Navbar></Navbar>
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
        </HistoryProvider>
      </WishProvider>
    </CartProvider>
  );
};

export default Root;
