import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";
const Details = () => {
  const { id } = useParams();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("/data/devices.json")
      .then((res) => res.json())
      .then((data) => setDevices(data.products));
  }, []);
  const newdevice = devices.filter((d) => {
    return d["product_id"] === Number(id);
  });

  if (newdevice.length == 1) {
    return (
      <div className="relative mb-[550px] bg-primary-0 px-5 pb-56 pt-8 md:mb-[320px] md:px-32 md:pb-64 lg:mb-[400px] lg:pb-56">
        <div className="mx-auto max-w-3xl space-y-4 text-center text-white">
          <p className="text-2xl font-bold md:text-3xl">Product Details</p>
          <p className="text-sm">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="absolute left-1/2 top-48 mx-auto w-11/12 -translate-x-1/2 rounded-3xl border-[3px] border-solid border-white bg-white p-4 md:-bottom-[370px] md:top-auto md:rounded-[32px] md:p-6 lg:w-[70%]">
          <ShowDetails device={newdevice[0]}></ShowDetails>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Details;
