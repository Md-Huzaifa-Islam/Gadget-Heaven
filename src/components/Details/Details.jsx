import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetch("/src/data/devices.json")
      .then((res) => res.json())
      .then((data) => setDevices(data.products));
  }, []);
  const device = devices.filter((d) => {
    return d["product_id"] === Number(id);
  });

  return <div></div>;
};

export default Details;
