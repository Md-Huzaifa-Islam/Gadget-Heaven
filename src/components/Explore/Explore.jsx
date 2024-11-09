import { Outlet } from "react-router-dom";

const Explore = () => {
  return (
    <div className="grid gap-4 md:gap-12">
      <Outlet></Outlet>
    </div>
  );
};

export default Explore;
