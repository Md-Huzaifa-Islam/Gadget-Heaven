import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Local Storage/localStorage";
import CartDevice from "./CartDevice";

const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/src/data/devices.json")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  const ids = getFromLocalStorage("cart");
  const items = data.filter((device) => {
    return ids.includes(device["product_id"]);
  });

  return (
    <div className="bg-background-0 px-32 pt-12 text-black">
      <div className="flex items-center justify-between px-5 pb-8">
        <p className="text-2xl font-bold text-[#0B0B0B]">Cart</p>
        <div className="flex items-center justify-between">
          <p className="mr-6 text-2xl font-bold text-[#0B0B0B]">
            Total cost: 999.99
          </p>
          <button className="mr-4 flex items-center gap-2 rounded-[32px] border-[1.5px] border-[#9538E2] px-5 py-2 text-lg font-semibold text-[#9538E2]">
            <p>Sort by Price</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_13_2554)">
                <path
                  d="M4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12C6.53043 12 7.03914 11.7893 7.41421 11.4142C7.78929 11.0391 8 10.5304 8 10C8 9.46957 7.78929 8.96086 7.41421 8.58579C7.03914 8.21071 6.53043 8 6 8C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10Z"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4V8"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12V20"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16Z"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4V14"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V20"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 7C16 7.53043 16.2107 8.03914 16.5858 8.41421C16.9609 8.78929 17.4696 9 18 9C18.5304 9 19.0391 8.78929 19.4142 8.41421C19.7893 8.03914 20 7.53043 20 7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5C17.4696 5 16.9609 5.21071 16.5858 5.58579C16.2107 5.96086 16 6.46957 16 7Z"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4V5"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9V20"
                  stroke="#8332C5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2554">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="rounded-[32px] border-[1.5px] border-[#9538E2] bg-[#9538E2] px-5 py-2 text-lg font-medium text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-5">
        {items.map((device, id) => (
          <CartDevice device={device} key={id}></CartDevice>
        ))}
      </div>
    </div>
  );
};

export default Cart;
