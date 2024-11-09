import { useContext } from "react";
import WishContext from "../../context/wishContext";
import WishDevice from "./WishDevice";
const Wishlist = () => {
  const { wish } = useContext(WishContext);
  return (
    <div className="bg-background-0 px-32 pt-12 text-black">
      <div className="flex items-center justify-between px-5 pb-8">
        <p className="text-2xl font-bold text-[#0B0B0B]">Wishlist</p>
      </div>
      <div className="flex flex-col gap-6 px-5">
        {wish.map((device, id) => (
          <WishDevice device={device} key={id}></WishDevice>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
