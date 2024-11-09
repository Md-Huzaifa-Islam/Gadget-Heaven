import { useContext } from "react";
import WishDevice from "./WishDevice";
import WishContext from "../../context/wishContext";
const Wishlist = () => {
  const { wish } = useContext(WishContext);
  return (
    <div className="bg-background-0 pt-6 text-black md:px-8 md:pt-12 lg:px-32">
      <div className="flex items-center justify-between px-5 pb-8">
        <p className="text-xl font-bold text-[#0B0B0B] md:text-2xl">Wishlist</p>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 md:px-5">
        {wish.map((device, id) => (
          <WishDevice device={device} key={id}></WishDevice>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
