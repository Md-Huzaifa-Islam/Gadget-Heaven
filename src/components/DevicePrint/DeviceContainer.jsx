import { useEffect } from "react";
import { useState } from "react";
import Device from "./Device";
import PropTypes from "prop-types";

const DeviceContainer = ({ type, is }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/src/data/devices.json")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  if (is) {
    const newList = data.filter((device) => {
      return device[is] === true;
    });
    return (
      <div className="grid w-full grid-cols-3 gap-6">
        {newList.map((data) => (
          <Device data={data} key={data["product_id"]}></Device>
        ))}
      </div>
    );
  }
  if (type === "all") {
    return (
      <div className="grid w-full grid-cols-3 gap-6">
        {data.map((data) => (
          <Device data={data} key={data["product_id"]}></Device>
        ))}
      </div>
    );
  }
  const newList = data.filter((device) => {
    return device.category === type;
  });

  return (
    <div className="grid w-full grid-cols-3 gap-6">
      {newList.map((data) => (
        <Device data={data} key={data["product_id"]}></Device>
      ))}
    </div>
  );
};
DeviceContainer.propTypes = {
  type: PropTypes.string,
  is: PropTypes.string,
};

export default DeviceContainer;
