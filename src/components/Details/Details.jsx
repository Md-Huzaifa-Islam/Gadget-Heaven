import { useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [devices, setDevices] = useState([]);
  useState(() => {
    fetch("/src/data/devices.json")
      .then((res) => res.json())
      .then((data) => setDevices(data.products));
  }, []);
  const device = devices.find((d) => d["product_id"] == id);

  return (
    <div>
      <div className="flex flex-col items-center gap-4 bg-primary-0 pt-8 text-center text-white">
        <p className="text-3xl font-bold">Dashboard</p>
        <p className="w-[700px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default Details;
