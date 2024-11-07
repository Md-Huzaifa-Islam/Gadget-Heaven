import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";
const Details = () => {
  const { id } = useParams();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("/src/data/devices.json")
      .then((res) => res.json())
      .then((data) => setDevices(data.products));
  }, []);
  const newdevice = devices.filter((d) => {
    return d["product_id"] === Number(id);
  });

  if (newdevice.length == 1) {
    return (
      <div className="relative mb-[600px] bg-primary-0 px-32 pb-56 pt-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center text-white">
          <p className="text-3xl font-bold">Product Details</p>
          <p className="">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="absolute -bottom-[370px] left-1/2 mx-auto w-[70%] -translate-x-1/2 rounded-[32px] border-[3px] border-solid border-white bg-white p-6">
          <ShowDetails device={newdevice[0]}></ShowDetails>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Details;
