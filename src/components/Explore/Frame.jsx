import { useState } from "react";
import Category from "./Category";
import { Outlet } from "react-router-dom";
const Frame = () => {
  const [data, setData] = useState([]);
  useState(() => {
    fetch("/data/catagories.json")
      .then((res) => res.json())
      .then((dat) => setData(dat.categories));
  }, []);
  return (
    <>
      <p
        id="shop"
        className="mt-40 text-center text-3xl font-semibold text-[#0B0B0B] md:mt-48 md:text-4xl md:font-bold lg:mt-[430px]"
      >
        Explore Cutting-Edge Gadgets
      </p>
      <div className="flex flex-col gap-3 px-5 md:px-20 lg:flex-row lg:gap-6 lg:px-32">
        <div className="flex h-max flex-wrap gap-3 rounded-lg border border-[#09080F1A] bg-white p-6 md:rounded-2xl lg:grid lg:grid-cols-[170px] lg:gap-6">
          {data.map((name, index) => {
            return <Category key={index} names={name}></Category>;
          })}
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Frame;
