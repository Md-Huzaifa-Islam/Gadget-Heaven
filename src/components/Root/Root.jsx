import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CartProvider } from "../../Context/Cardcontext";
import { WishProvider } from "../../context/wishContext";
const Root = () => {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col justify-between bg-background-0 p-7 font-sora">
        <div className="">
          <Navbar></Navbar>
          <WishProvider>
            <Outlet></Outlet>
          </WishProvider>
        </div>
        <Footer></Footer>
      </div>
    </CartProvider>
  );
};

export default Root;
