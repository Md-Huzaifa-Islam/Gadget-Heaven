import { useState } from "react";
import Category from "./Category";
import { Outlet } from "react-router-dom";
const Explore = () => {
  const [data, setData] = useState([]);
  useState(() => {
    fetch("/src/data/catagories.json")
      .then((res) => res.json())
      .then((dat) => setData(dat.categories));
  }, []);
  return (
    <div className="">
      <Outlet></Outlet>
    </div>
  );
};

export default Explore;
