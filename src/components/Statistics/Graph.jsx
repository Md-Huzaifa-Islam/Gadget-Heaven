import { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";

export default function Graph() {
  const [data2, setData] = useState([]);
  useEffect(() => {
    fetch("/data/devices.json")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  const data = data2.filter((device) => {
    return device.category == "laptop";
  });
  return (
    <ComposedChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="product_title" padding={{ left: 0, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="price"
        fill="#9538E226"
        stroke="#9538E226"
      />
      <Bar dataKey="price" barSize={32} fill="#9538E2" />
    </ComposedChart>
  );
}
