import { useState } from "react";
import Category from "./Category";
import { Outlet } from "react-router-dom";
const Frame = () => {
  const [data, setData] = useState([]);
  useState(() => {
    fetch("/src/data/catagories.json")
      .then((res) => res.json())
      .then((dat) => setData(dat.categories));
  }, []);
  return (
    <>
      <p className="text-center text-4xl font-bold text-[#0B0B0B]">
        Explore Cutting-Edge Gadgets
      </p>
      <div className="flex gap-6 px-32">
        <div className="grid h-max grid-cols-[170px] gap-6 rounded-2xl border border-[#09080F1A] bg-white p-6">
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
